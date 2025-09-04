export declare class SearchService {
    private readonly logger;
    suggestionByText({ latitude, longitude, keyword }: any): Promise<import("axios").AxiosResponse<any, any>>;
    revGeoCode(place_id: string): Promise<import("axios").AxiosResponse<any, any>>;
}
