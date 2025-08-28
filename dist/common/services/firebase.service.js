"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var FirebaseService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const admin = __importStar(require("firebase-admin"));
function stringifyValues(obj) {
    if (Array.isArray(obj)) {
        return obj.map(stringifyValues);
    }
    else if (obj instanceof Date) {
        return obj.toISOString();
    }
    else if (obj !== null && typeof obj === "object") {
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, stringifyValues(value)]));
    }
    else {
        return String(obj);
    }
}
let FirebaseService = FirebaseService_1 = class FirebaseService {
    constructor() {
        this.logger = new common_1.Logger(FirebaseService_1.name);
    }
    verifyIdToken(idToken) {
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
    sendToAdmin({ tokens, title, body, }) {
        const messages = tokens.map((token) => {
            return {
                data: {
                    title,
                    body,
                    url: "",
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
    send({ token, title, body, data = {}, sound }) {
        data = stringifyValues(data);
        const message = {
            notification: {
                title,
                body,
            },
            token,
            data,
            android: {
                notification: {
                    sound: sound || "UWAY.wav",
                    defaultSound: false,
                    channelId: "uway-call-id",
                },
            },
            apns: {
                payload: {
                    aps: {
                        sound: sound || "UWAY.wav",
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
                this.logger.error(`Send message to device error ${e.code} with token=${token}`);
                reject(e);
            });
        });
    }
    sends(payloads) {
        const messages = payloads.map(({ title, token, body, data = {}, sound }) => ({
            notification: {
                title,
                body,
            },
            token,
            data,
            android: {
                notification: {
                    sound: sound || "UWAY.wav",
                    defaultSound: false,
                },
            },
            apns: {
                payload: {
                    aps: {
                        sound: sound || "UWAY.wav",
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
                this.logger.log("Send batch message to device success", JSON.stringify(result.responses));
                const { successCount, failureCount, responses } = result;
                this.logger.log(`Batch successfully sent ${successCount} messages, failed to send ${failureCount} messages`);
                const successPayloads = [];
                const failurePayloads = [];
                responses.forEach((response, index) => {
                    if (response.success) {
                        successPayloads.push(payloads[index]);
                    }
                    else {
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
    sendNotNotiPayload({ token, data }) {
        data = stringifyValues(data);
        const message = {
            token,
            data,
            android: {
                priority: "high",
            },
            apns: {
                headers: {
                    "apns-priority": "10",
                },
                payload: {
                    aps: {
                        "content-available": 1,
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
                this.logger.error(`Send message to device error ${e.code} with token=${token}`);
                reject(e);
            });
        });
    }
};
exports.FirebaseService = FirebaseService;
exports.FirebaseService = FirebaseService = FirebaseService_1 = __decorate([
    (0, common_1.Injectable)()
], FirebaseService);
