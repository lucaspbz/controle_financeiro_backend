import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateAdminUser1647902759164 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO users ("name", email, "password", "admin")
      VALUES ('Admin', 'lucas.pbezera@hotmail.com', '${
        Math.random() * 100000
      }', True)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
