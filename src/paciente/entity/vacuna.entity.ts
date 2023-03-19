import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Vacuna {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number

  @Column({ type: 'varchar', nullable: true })
  codigo: string

  @Column({ type: 'varchar', nullable: true })
  descripcion: string

  @Column({ name: 'fecha_registro', type: 'date', nullable: true })
  fechaRegistro: string

  @Column({ type: 'varchar', nullable: true })
  estado: string
}
