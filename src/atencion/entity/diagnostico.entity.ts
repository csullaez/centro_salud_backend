import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Diagnostico {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number

  @Column({ type: 'varchar', length: 50, nullable: true })
  codigo: string

  @Column({ type: 'varchar', length: 100, nullable: true })
  enfermedad: string

  @Column({ type: 'varchar', nullable: true })
  estado: string
}
