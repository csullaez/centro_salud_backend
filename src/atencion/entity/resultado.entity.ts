import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Atencion } from './atencion.entity'

@Entity({ name: 'resultado' })
export class Resultado {
  @PrimaryGeneratedColumn({ name: 'id_resultado' })
  id: number

  @Column({ type: 'varchar', nullable: true })
  subjetivo: string

  @Column({ type: 'varchar', nullable: true })
  objetivo: string

  @Column({ type: 'varchar', nullable: true })
  analisis: string

  @Column({ name: 'plan_accion', type: 'varchar', nullable: true })
  planAccion: string

  @Column({ type: 'varchar', nullable: true })
  tratamiento: string

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date

  @Column({ type: 'time', default: () => 'CURRENT_TIMESTAMP' })
  hora: Date

  @Column({
    name: 'id_atencion',
    nullable: true,
  })
  idAtencion?: number

  @ManyToOne(() => Atencion, (atencion) => atencion, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_atencion' })
  atencion: Atencion
}
