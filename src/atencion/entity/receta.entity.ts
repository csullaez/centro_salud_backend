import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Atencion } from './atencion.entity'

@Entity()
export class Receta {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Atencion, (atencion) => atencion)
  atencion: Atencion

  @Column({ nullable: true })
  medicamento: string

  @Column({ nullable: true })
  presentacion: string

  @Column({ nullable: true })
  dosis: string

  @Column({ nullable: true })
  duracion: string

  @Column({ nullable: true })
  cantidad: number

  @Column({ name: 'estado_medicamento', nullable: true })
  estadoMedicamento: boolean
}
