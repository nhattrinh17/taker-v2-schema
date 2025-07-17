export declare class S3Service {
    private readonly logger;
    private readonly s3Client;
    constructor();
    getSignedFileUrl(key: string): Promise<{
        type: string;
        message: string;
        data: string;
    } | {
        type: string;
        message: any;
        data?: undefined;
    }>;
}
