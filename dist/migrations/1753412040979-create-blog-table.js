"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBlogTable1753412040979 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateBlogTable1753412040979 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "blogs",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "blogCategoryId",
                    type: "varchar",
                    length: "36",
                    isNullable: true,
                },
                {
                    name: "title",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "slug",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "image",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "typePress",
                    type: "enum",
                    enum: [...Object.values(enums_1.TypePressBlogEnum)],
                    default: `'${enums_1.TypePressBlogEnum.NAVIGATION}'`,
                },
                {
                    name: "screenCustomer",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "screenPartner",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "linkNavigate",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "order",
                    type: "int",
                    isNullable: true,
                },
                {
                    name: "isPromotion",
                    type: "boolean",
                    isNullable: false,
                    default: false,
                },
                {
                    name: "status",
                    type: "enum",
                    enum: [...Object.values(enums_1.StatusBlogEnum)],
                    default: `'${enums_1.StatusBlogEnum.ACTIVE}'`,
                },
                {
                    name: "banner",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "runBanner",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "deletedAt",
                    type: "datetime(6)",
                    isNullable: true,
                },
                {
                    name: "createdAt",
                    type: "datetime(6)",
                    default: "CURRENT_TIMESTAMP(6)",
                },
                {
                    name: "updatedAt",
                    type: "datetime(6)",
                    default: "CURRENT_TIMESTAMP(6)",
                    onUpdate: "CURRENT_TIMESTAMP(6)",
                },
            ],
        }));
        await queryRunner.createForeignKey("blogs", new typeorm_1.TableForeignKey({
            columnNames: ["blogCategoryId"],
            referencedColumnNames: ["id"],
            referencedTableName: "blog_categories",
            onDelete: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("blogs", "FK_blogCategoryId");
        await queryRunner.dropTable("blogs");
    }
}
exports.CreateBlogTable1753412040979 = CreateBlogTable1753412040979;
