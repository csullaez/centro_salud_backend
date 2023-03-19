import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { HistorialClinico } from './historial_clinico.entity'
import { Vacuna } from './vacuna.entity'

@Entity({ name: 'detalle_vacuna' })
export class DetalleVacuna {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number
  @Column({ name: 'id_nro_vacunas' })
  idNroVacunas: number

  @Column({ type: 'varchar', nullable: true })
  estado: string

  @Column({ type: 'int', name: 'id_vacuna', nullable: true })
  idVacuna: number

  @ManyToOne(() => Vacuna, { nullable: false })
  @JoinColumn({ name: 'id_vacuna' })
  vacuna: Vacuna

  @Column({ type: 'int', name: 'id_historial_clinico', nullable: true })
  idHistorialClinico: number

  @ManyToOne(() => HistorialClinico, { nullable: false })
  @JoinColumn({ name: 'id_historial_clinico' })
  historialClinico: HistorialClinico
}
