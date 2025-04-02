import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1743519906640 implements MigrationInterface {
    name = 'Initial1743519906640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "PROJECTS" ("id" SERIAL NOT NULL, "imgPath" character varying(255), "title" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "fulldescription" character varying(255) NOT NULL, "serviceId" integer NOT NULL, CONSTRAINT "PK_e0623a1c11d05bd5179a765d60b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "JOBS" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "active" bit NOT NULL DEFAULT '1', CONSTRAINT "PK_870b0353cc2551f49268cdfbd99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ORDERS" ("id" SERIAL NOT NULL, "firstname" character varying(255) NOT NULL, "lastname" character varying(255) NOT NULL, "surname" character varying(255), "mail" character varying(255), "phone" character varying(255), "dateOrd" date NOT NULL, "active" bit NOT NULL, "serviceId" integer, "JobId" integer, CONSTRAINT "PK_10fbdf1c66850a0f61afcf552d9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "SERVICES" ("id" SERIAL NOT NULL, "imgPath" character varying(255), "title" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "price" money NOT NULL, "active" bit NOT NULL DEFAULT '1', "type" integer NOT NULL, CONSTRAINT "PK_9fda3a48b803088840432592717" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "TYPE" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, CONSTRAINT "PK_70187a00285b60a55c335f1fc15" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "PROJECTS" ADD CONSTRAINT "FK_079bcfa5efafd9b0f23c9df36f5" FOREIGN KEY ("serviceId") REFERENCES "SERVICES"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ORDERS" ADD CONSTRAINT "FK_77c2eb5e006ac696caf8ad42059" FOREIGN KEY ("serviceId") REFERENCES "SERVICES"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ORDERS" ADD CONSTRAINT "FK_a8bd3fbda7d1c33e5d71d2fd59e" FOREIGN KEY ("JobId") REFERENCES "JOBS"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "SERVICES" ADD CONSTRAINT "FK_cae0b5e191a3c90a1fcb62b9012" FOREIGN KEY ("type") REFERENCES "TYPE"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SERVICES" DROP CONSTRAINT "FK_cae0b5e191a3c90a1fcb62b9012"`);
        await queryRunner.query(`ALTER TABLE "ORDERS" DROP CONSTRAINT "FK_a8bd3fbda7d1c33e5d71d2fd59e"`);
        await queryRunner.query(`ALTER TABLE "ORDERS" DROP CONSTRAINT "FK_77c2eb5e006ac696caf8ad42059"`);
        await queryRunner.query(`ALTER TABLE "PROJECTS" DROP CONSTRAINT "FK_079bcfa5efafd9b0f23c9df36f5"`);
        await queryRunner.query(`DROP TABLE "TYPE"`);
        await queryRunner.query(`DROP TABLE "SERVICES"`);
        await queryRunner.query(`DROP TABLE "ORDERS"`);
        await queryRunner.query(`DROP TABLE "JOBS"`);
        await queryRunner.query(`DROP TABLE "PROJECTS"`);
    }

}
