export interface UserDataTokenDto {
    id: number;
    tenantId: string;
    email: string;
}
export declare const UserDataToken: (...dataOrPipes: unknown[]) => ParameterDecorator;
