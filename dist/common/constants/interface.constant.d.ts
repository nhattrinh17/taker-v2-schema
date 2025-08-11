import { CustomPayloadTypeEnum } from "@common/enums";
export interface TextPayload {
    content: string;
}
export interface MediaPayload {
    url: string;
}
export interface CustomPayload {
    type: CustomPayloadTypeEnum;
    data: Record<string, any>;
}
export type MessagePayload = TextPayload | MediaPayload | CustomPayload;
export interface ResposeUserPermission {
    permission: string;
    action: string;
}
