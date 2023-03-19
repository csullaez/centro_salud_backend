import { Persona } from '../../paciente/entity/persona.entity'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

@Entity()
export class AsignacionTurno {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string

  @Column()
  turno: string

  @Column({ nullable: true })
  observacion: string

  @Column({ nullable: true })
  fecha: Date

  @Column({ nullable: true })
  estado: string

  @Column({ type: 'int', name: 'id_persona', nullable: true })
  idPersona: number

  @ManyToOne(() => Persona, (persona) => persona)
  @JoinColumn({ name: 'id_persona' })
  persona: Persona
}
