import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', name: 'nombre_servicio', nullable: true })
  nombreServicio: string

  @Column({ type: 'varchar', nullable: true })
  codigo: string

  @Column({ type: 'varchar', nullable: true })
  estado: string
}
