import { INotificationPayload } from '@common/constants';
import { Injectable, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';

export interface INotificationPayloadV2 {
  token: string;

  data?: { [key: string]: string };
}

function stringifyValues(obj) {
  if (Array.isArray(obj)) {
    return obj.map(stringifyValues);
  } else if (obj instanceof Date) {
    return obj.toISOString();
  } else if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, stringifyValues(value)])
    );
  } else {
    return String(obj);
  }
}

@Injectable()
export class FirebaseService {
  private readonly logger = new Logger(FirebaseService.name);
  verifyIdToken(idToken: string) {
    return new Promise((resolve, reject) => {
      admin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
          const uid = decodedToken.uid;
          resolve(uid);
        })
        .catch((e) => {
          this.logger.error(e);
          reject(e);
        });
    });
  }

  sendToAdmin({ tokens, title, body }: { tokens: string[]; title: string; body: string; url?: string }) {
    const messages: admin.messaging.Message[] = tokens.map((token) => {
      return {
        data: {
          title, // Sử dụng data thay vì notification
          body,
          url: '', // Thêm URL vào data nếu cần
        },
        token: token,
      };
    });
    return new Promise((resolve, reject) => {
      admin
        .messaging()
        .sendEach(messages)
        .then((result) => {
          this.logger.log(`Send message to admin success with tokens=${tokens}`, result);
          resolve({ tokens, title, body });
        })
        .catch((e) => {
          this.logger.error(`Send message to admin error ${e.code} with tokens=${tokens}`);
          reject(e);
        });
    });
  }

  send({ token, title, body, data = {}, sound }: INotificationPayload) {
    data = stringifyValues(data); 
    const message: admin.messaging.Message = {
      notification: {
        title,
        body,
      },
      token,
      data,
      android: {
        notification: {
          sound: sound || 'XIMI.wav',
          defaultSound: false,
          channelId: 'xiin-call-id',
        },
      },
      apns: {
        payload: {
          aps: {
            sound: sound || 'XIMI.wav',
            defaultSound: false,
          },
        },
      },
    };
    return new Promise((resolve, reject) => {
      admin
        .messaging()
        .send(message)
        .then((result) => {
          this.logger.log(`Send message to device success with token=${token}`, result);
          resolve({ token, title, body, data });
        })
        .catch((e) => {
          // TODO: Need to handle token outdated
          // https://bard.google.com/chat/cd6c73cc59d0b37b
          this.logger.error(`Send message to device error ${e.code} with token=${token}`);
          reject(e);
        });
    });
  }

  sends(payloads: INotificationPayload[]) {
    const messages: admin.messaging.Message[] = payloads.map(({ title, token, body, data = {}, sound }) => ({
      notification: {
        title,
        body,
      },
      token,
      data,
      android: {
        notification: {
          sound: sound || 'XIMI.wav',
          defaultSound: false,
        },
      },
      apns: {
        payload: {
          aps: {
            sound: sound || 'XIMI.wav',
            defaultSound: false,
          },
        },
      },
    }));
    return new Promise((resolve, reject) => {
      admin
        .messaging()
        .sendEach(messages)
        .then((result) => {
          this.logger.log('Send batch message to device success', JSON.stringify(result.responses));
          const { successCount, failureCount, responses } = result;
          this.logger.log(`Batch successfully sent ${successCount} messages, failed to send ${failureCount} messages`);
          const successPayloads: INotificationPayload[] = [];
          const failurePayloads: INotificationPayload[] = [];

          responses.forEach((response, index) => {
            if (response.success) {
              successPayloads.push(payloads[index]);
            } else {
              // TODO: Need to handle token outdated
              failurePayloads.push(payloads[index]);
            }
          });
          resolve({ successPayloads, failurePayloads });
        })
        .catch((e) => {
          this.logger.error(e);
          reject(e);
        });
    });
  }

  sendNotNotiPayload({ token, data }: INotificationPayloadV2) {
    data = stringifyValues(data); // Chuyển đổi tất cả giá trị trong data thành string
    const message: admin.messaging.Message = {
      token,
      data, // Phải là object key-value string: string
      android: {
        priority: 'high', // bắt buộc
      },
      apns: {
        headers: {
          'apns-priority': '10', // quan trọng với iOS
        },
        payload: {
          aps: {
            'content-available': 1, // cần để iOS nhận trong background
          },
        },
      },
    };

    return new Promise((resolve, reject) => {
      admin
        .messaging()
        .send(message)
        .then((result) => {
          this.logger.log(`Send message to device success with token=${token}`, result);
          resolve({ token, data });
        })
        .catch((e) => {
          // TODO: Need to handle token outdated
          // https://bard.google.com/chat/cd6c73cc59d0b37b
          this.logger.error(`Send message to device error ${e.code} with token=${token}`);
          reject(e);
        });
    });
  }
}
