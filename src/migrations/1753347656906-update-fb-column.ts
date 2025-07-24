import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateFbColumn1753347656906 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "partners",
      new TableColumn({
        name: "facebookId",
        type: "varchar",
        isNullable: true,
        length: "255",
        comment: "Facebook ID of the partner for social login",
      })
    );

    await queryRunner.addColumn(
      "partners",
      new TableColumn({
        name: "facebookName",
        type: "varchar",
        isNullable: true,
        length: "255",
        comment: "Facebook of the partner for social login",
      })
    );

    await queryRunner.addColumn(
      "customers",
      new TableColumn({
        name: "facebookId",
        type: "varchar",
        isNullable: true,
        length: "255",
        comment: "Facebook ID of the customer for social login",
      })
    );

    await queryRunner.addColumn(
      "customers",
      new TableColumn({
        name: "facebookName",
        type: "varchar",
        isNullable: true,
        length: "255",
        comment: "Facebook of the customer for social login",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("partners", "facebookId");
    await queryRunner.dropColumn("partners", "facebookName");
    await queryRunner.dropColumn("customers", "facebookId");
    await queryRunner.dropColumn("customers", "facebookName");
  }
}
