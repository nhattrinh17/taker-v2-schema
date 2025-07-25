import { StatusBlogEnum, TypePressBlogEnum } from "@common/enums";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateBlogTable1753412040979 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
            enum: [...Object.values(TypePressBlogEnum)],
            default: `'${TypePressBlogEnum.NAVIGATION}'`,
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
            enum: [...Object.values(StatusBlogEnum)],
            default: `'${StatusBlogEnum.ACTIVE}'`,
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
      })
    );

    // Create foreign key for customerId
    await queryRunner.createForeignKey(
      "blogs",
      new TableForeignKey({
        columnNames: ["blogCategoryId"],
        referencedColumnNames: ["id"],
        referencedTableName: "blog_categories",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // drop foreign key
    await queryRunner.dropForeignKey("blogs", "FK_blogCategoryId");

    await queryRunner.dropTable("blogs");
  }
}
