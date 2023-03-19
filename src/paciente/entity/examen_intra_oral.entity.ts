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

  @Column({ type: 'varchar', length: 50, nullable: true })
  pisoDeBoca: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  mucosaYugal: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  ensias: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  usaProteccionBucal: string
}
