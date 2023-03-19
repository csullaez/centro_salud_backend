import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'antecedentes_pediatricos' })
export class AntecedentesPediatricos {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string

  @Column({
    name: 'peso_recien_nacido',
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  pesoRecienNacido: number

  @Column({ name: 'tipo_parto', length: 50 })
  tipoParto: string

  @Column({ name: 'observacion_perinatal', type: 'text', nullable: true })
  observacionPerinatal?: string | null

  @Column({ length: 50 })
  lactancia: string

  @Column({ length: 50 })
  estado: string
}
