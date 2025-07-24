interface IFbUser {
    id: string;
    name: string;
    email: string;
    picture: {
        data: {
            url: string;
        };
    };
    birthday?: string;
    location?: {
        id: string;
        name: string;
    };
}
export declare class FbService {
    verifyFacebookToken(accessToken: string): Promise<IFbUser | null>;
}
export {};
