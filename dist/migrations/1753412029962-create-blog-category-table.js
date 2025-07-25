"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBlogCategoryTable1753412029962 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateBlogCategoryTable1753412029962 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "blog_categories",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "slug",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "description",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "status",
                    type: "enum",
                    enum: [...Object.values(enums_1.StatusBlogEnum)],
                    default: `'${enums_1.StatusBlogEnum.ACTIVE}'`,
                },
                {
                    name: "order",
                    type: "int",
                    isNullable: true,
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
    }
    async down(queryRunner) {
        await queryRunner.dropTable("blog_categories", true, true, true);
    }
}
exports.CreateBlogCategoryTable1753412029962 = CreateBlogCategoryTable1753412029962;
