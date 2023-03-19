import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Diagnostico } from './diagnostico.entity'
import { Resultado } from './resultado.entity'

@Entity({ name: 'detalle_diagnostico' })
export class DetalleDiagnostico {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number

  @Column({ name: 'tipo', length: 10, nullable: true })
  tipo: string

  @Column({ type: 'int', name: 'id_diagnostico', nullable: true })
  idDiagnostico: number

  @ManyToOne(() => Diagnostico, { nullable: false })
  @JoinColumn({ name: 'id_diagnostico' })
  diagnostico: Diagnostico

  @Column({ type: 'int', name: 'id_resultado', nullable: true })
  idResultado: number

  @ManyToOne(() => Resultado, { nullable: false })
  @JoinColumn({ name: 'id_resultado' })
  resultado: Resultado
}
