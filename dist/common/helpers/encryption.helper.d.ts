export declare const generateHashedPassword: (password: string) => any;
export declare const validPassword: (password: string, passwordHashed: string) => any;
export declare const orderId: () => string;
export declare const generateTripId: () => string;
export declare const checkIdType: (id: string) => "orderId" | "tripId" | "unknown";
