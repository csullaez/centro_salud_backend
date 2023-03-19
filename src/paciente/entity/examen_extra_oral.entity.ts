import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'examen_extra_oral' })
export class ExamenExtraOral {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'ganglios_infaticos', nullable: true })
  gangliosInfaticos: string

  @Column({ name: 'respirador', nullable: true })
  respirador: string
}
