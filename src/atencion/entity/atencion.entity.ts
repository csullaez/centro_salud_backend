import { HistorialClinico } from '../../paciente/entity/historial_clinico.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { AsignacionTurno } from './asignacion_turno.entity'
import { Servicio } from './servicio.entity'
import { Usuario } from 'src/usuario/entity/usuario.entity'

@Entity()
export class Atencion {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date

  @Column({ type: 'time', default: () => 'CURRENT_TIMESTAMP' })
  hora: Date

  @Column({ type: 'varchar', length: 20, nullable: true })
  tipoAtencion: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  ley475: string

  @Column({ type: 'varchar', nullable: true })
  estado: string

  @Column({ type: 'int', name: 'id_historial_clinico', nullable: true })
  idHistorialClinico: number

  @ManyToOne(() => HistorialClinico, (historialClinico) => historialClinico)
  @JoinColumn({ name: 'id_historial_clinico' })
  historialClinico: HistorialClinico

  @Column({ type: 'int', name: 'id_servicio', nullable: true })
  idServicio: number

  @ManyToOne(() => Servicio, (servicio) => servicio)
  @JoinColumn({ name: 'id_servicio' })
  servicio: Servicio

  @Column({ type: 'int', name: 'id_asignacion_turno', nullable: true })
  idAsignacionTurno: number

  @ManyToOne(() => AsignacionTurno, (asignacionTurno) => asignacionTurno)
  @JoinColumn({ name: 'id_asignacion_turno' })
  asignacionTurno: AsignacionTurno

  @Column({ type: 'int', name: 'id_usuario', nullable: true })
  idUsuario: number

  @ManyToOne(() => Usuario, (usuario) => usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario
}
