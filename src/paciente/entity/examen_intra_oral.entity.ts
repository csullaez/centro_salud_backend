import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class ExamenIntraOral {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 50, nullable: true })
  labios: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  lengia: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  paladar: string

  @Column({ name: 'piso_de_boca', type: 'varchar', length: 50, nullable: true })
  pisoDeBoca: string

  @Column({ name: 'mucosa_yugal', type: 'varchar', length: 50, nullable: true })
  mucosaYugal: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  ensias: string

  @Column({
    name: 'usa_proteccion_bucal',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  usaProteccionBucal: string
}
