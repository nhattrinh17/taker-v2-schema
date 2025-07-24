import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RemoveAddressFields1752826000000 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
