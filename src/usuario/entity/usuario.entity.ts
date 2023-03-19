import { Persona } from 'src/paciente/entity/persona.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number

  @Column({ name: 'cargo', type: 'varchar', length: 50, nullable: true })
  cargo: string

  @Column({ name: 'especialidad', type: 'varchar', length: 50, nullable: true })
  especialidad: string

  @Column({ name: 'login', type: 'varchar', length: 255, nullable: true })
  login: string

  @Column({ name: 'password', type: 'varchar', length: 255, nullable: true })
  password: string

  @Column({
    name: 'fecha',
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha: Date

  @Column({ name: 'estado', type: 'varchar', nullable: true })
  estado: string

  @ManyToOne(() => Persona)
  @JoinColumn({ name: 'id_persona' })
  persona: Persona
}
