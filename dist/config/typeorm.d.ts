import { DataSource, DataSourceOptions } from 'typeorm';
export declare function createTypeOrmConfig(dbConfig: {
    master: {
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    };
    slaves?: {
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    }[];
    logging?: boolean;
    migrationsRun?: boolean;
}): DataSourceOptions;
export declare function createDataSource(config: DataSourceOptions): DataSource;
