"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypeOrmConfig = createTypeOrmConfig;
exports.createDataSource = createDataSource;
const typeorm_1 = require("typeorm");
const path_1 = require("path");
function createTypeOrmConfig(dbConfig) {
    return {
        type: 'mysql',
        replication: {
            master: dbConfig.master,
            slaves: dbConfig.slaves ?? [],
        },
        entities: [(0, path_1.join)(__dirname, '../entities/**/*.entity.{ts,js}')],
        migrations: [(0, path_1.join)(__dirname, '../migrations/*{.ts,.js}')],
        synchronize: false,
        migrationsRun: dbConfig.migrationsRun,
        logging: dbConfig.logging ?? false,
        extra: {
            connectTimeout: 10000,
        },
    };
}
function createDataSource(config) {
    return new typeorm_1.DataSource(config);
}
