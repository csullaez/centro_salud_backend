import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { ExamenExtraOral } from './examen_extra_oral.entity'
import { ExamenIntraOral } from './examen_intra_oral.entity'
import { HistorialClinico } from './historial_clinico.entity'

@Entity('historial_odontologico')
export class HistorialOdontologico {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => HistorialClinico, (historialClinico) => historialClinico)
  @JoinColumn({ name: 'id_historial_clinico' })
  historialClinico: HistorialClinico

  @ManyToOne(() => ExamenExtraOral, (examenExtraOral) => examenExtraOral)
  @JoinColumn({ name: 'id_examen_extra_oral' })
  examenExtraOral: ExamenExtraOral

  @ManyToOne(() => ExamenIntraOral, (examenIntraOral) => examenIntraOral)
  @JoinColumn({ name: 'id_examen_intra_oral' })
  examenIntraOral: ExamenIntraOral

  @Column({ name: 'uso_cepillo_dental', nullable: true })
  usoCepilloDental: string

  @Column({ name: 'uso_hilo_dental', nullable: true })
  usoHiloDental: string

  @Column({ name: 'uso_enjuague_bucal', nullable: true })
  usoEnjuagueBucal: string

  @Column({ name: 'frecuencia_cepillado_bucal', nullable: true })
  frecuenciaCepilladoBucal: string

  @Column({ name: 'sangrado_encias', nullable: true })
  sangradoEncias: string

  @Column({ name: 'calidad_higiene_bucal', nullable: true })
  calidadHigieneBucal: string

  @Column({ nullable: true })
  estado: number
}
