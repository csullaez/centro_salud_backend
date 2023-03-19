import { MigrationInterface, QueryRunner } from "typeorm";

export class init1679214440862 implements MigrationInterface {
    name = 'init1679214440862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "personas" ("id" BIGSERIAL NOT NULL, "nombres" character varying(100), "paterno" character varying(100), "materno" character varying(100), "nro_documento" character varying(50) NOT NULL, "expedido" character varying(50), "fecha_nacimiento" date, "genero" character varying(15), "direccion" character varying(250), "estado_civil" character varying(15), "nro_edificio" numeric, "telefono" character varying(25), "ocupacion" character varying(25), "escolaridad" character varying(25), "persona_responsable" character varying(25), CONSTRAINT "CHK_b2181219fe8f4cef17318aa438" CHECK (genero in ('M', 'F', 'OTRO')), CONSTRAINT "CHK_512100ff317339569e4f9c0aa7" CHECK (estado_civil in ('C', 'S')), CONSTRAINT "PK_714aa5d028f8f3e6645e971cecd" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "personas"`);
    }

}
