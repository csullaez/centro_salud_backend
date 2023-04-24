import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Persona } from './persona.entity'

@Entity({ name: 'pacientes' })
export class Paciente {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string

  @Column({
    name: 'alergia',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  alergia?: string | null

  @Column({
    name: 'grupo_sanguineo',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  grupoSanguineo?: string | null

  @Column({ name: 'factor_rh', length: 50 })
  factorRh: string

  @Column({ name: 'expedido', length: 50, nullable: true })
  expedido: string

  @Column({ name: 'estado', length: 50, nullable: true })
  estado: string

  @Column({ name: 'id_persona', type: 'bigint' })
  idPersona: string

  @OneToOne(() => Persona, {
    nullable: false,
  })
  @JoinColumn({
    name: 'id_persona',
    referencedColumnName: 'id',
  })
  persona: Persona
}
