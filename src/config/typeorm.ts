import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';

export function createTypeOrmConfig(dbConfig: {
  master: { host: string; port: number; username: string; password: string; database: string };
  slaves?: { host: string; port: number; username: string; password: string; database: string }[];
  logging?: boolean;
  migrationsRun?: boolean;
}): DataSourceOptions {
  return {
    type: 'mysql',
    replication: {
      master: dbConfig.master,
      slaves: dbConfig.slaves ?? [],
    },
    entities: [join(__dirname, '../entities/**/*.entity.{ts,js}')],
    migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
    synchronize: false,
    migrationsRun: dbConfig.migrationsRun,
    logging: dbConfig.logging ?? false,
  };
}

export function createDataSource(config: DataSourceOptions): DataSource {
  return new DataSource(config);
}
