import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { AntecedentesPediatricos } from './antedecentes_pediatricos.entity'
import { Paciente } from './paciente.entity'
import { Persona } from './persona.entity'

@Entity({ name: 'historial_clinico' })
export class HistorialClinico {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number

  @Column({ type: 'varchar', length: 50, name: 'tipo_doc', nullable: true })
  tipoDoc: string

  @Column({ type: 'int', name: 'nro', nullable: true })
  nro: number

  @Column({ type: 'int', name: 'nro_sumi', nullable: true })
  nroSumi: number

  @Column({ type: 'date', name: 'fecha', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date

  @Column({ type: 'time', name: 'hora', default: () => 'CURRENT_TIMESTAMP' })
  hora: Date

  @Column({ type: 'varchar', length: 255, name: 'observacion', nullable: true })
  observacion: string

  @Column({ type: 'varchar', name: 'estado' })
  estado: string

  @Column({ type: 'int', name: 'id_antecedentes_pediatricos', nullable: true })
  idAntecedentesPediatricos: number

  @Column({ type: 'int', name: 'id_paciente', nullable: true })
  idPaciente: number

  @Column({ type: 'int', name: 'id_persona_responsable', nullable: true })
  idPersonaResponsable: number

  @OneToOne(() => AntecedentesPediatricos, { nullable: true })
  @JoinColumn({ name: 'id_antecedentes_pediatricos' })
  antecedentesPediatricos: AntecedentesPediatricos

  @OneToOne(() => Paciente, { nullable: true })
  @JoinColumn({ name: 'id_paciente' })
  paciente: Paciente

  @OneToOne(() => Persona, { nullable: true })
  @JoinColumn({ name: 'id_persona_responsable' })
  personaResponsable: Persona
}
