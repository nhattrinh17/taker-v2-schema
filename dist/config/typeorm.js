"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypeOrmConfig = createTypeOrmConfig;
exports.createDataSource = createDataSource;
const typeorm_1 = require("typeorm");
const path_1 = require("path");
const entities_1 = require("../entities");
function createTypeOrmConfig(dbConfig) {
    return {
        type: 'mysql',
        replication: {
            master: dbConfig.master,
            slaves: dbConfig.slaves ?? [],
        },
        entities: entities_1.entities,
        migrations: [(0, path_1.join)(__dirname, '../migrations/*{.ts,.js}')],
        synchronize: false,
        migrationsRun: dbConfig.migrationsRun,
        logging: dbConfig.logging ?? false,
    };
}
function createDataSource(config) {
    return new typeorm_1.DataSource(config);
}
