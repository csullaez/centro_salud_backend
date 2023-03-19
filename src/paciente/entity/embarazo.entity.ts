import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { HistorialClinico } from './historial_clinico.entity'

@Entity({ name: 'embarazo' })
export class Embarazo {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'date', name: 'gestion', nullable: true })
  gestion: Date

  @Column({ type: 'int', name: 'duracion_meses', nullable: true })
  duracionMeses: number

  @Column({ type: 'varchar', name: 'tipo_parto', nullable: true, length: 50 })
  tipoParto: string

  @Column({ type: 'int', name: 'nro_recien_nacido_vivo', nullable: true })
  nroRecienNacidoVivo: number

  @Column({ type: 'int', name: 'nro_recien_nacido_muerto', nullable: true })
  nroRecienNacidoMuerto: number

  @Column({ type: 'varchar', name: 'aborto', nullable: true, length: 50 })
  aborto: string

  @Column({ type: 'int', name: 'id_historial_clinico', nullable: true })
  idHistorialClinico: number

  @ManyToOne(() => HistorialClinico, { nullable: true })
  @JoinColumn({ name: 'id_historial_clinico' })
  historialClinico: HistorialClinico
}
