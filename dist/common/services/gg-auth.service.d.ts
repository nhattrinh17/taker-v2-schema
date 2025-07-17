export declare class GoogleAuthService {
    private client;
    verifyIdToken(idToken: string): Promise<{
        email: string;
        name: string;
        picture: string;
        sub: string;
    }>;
}
