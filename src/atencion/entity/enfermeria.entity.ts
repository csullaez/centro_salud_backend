import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Atencion } from './atencion.entity'

@Entity('enfermeria')
export class Enfermeria {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ type: 'date', nullable: true })
  fecha: Date

  @Column({ name: 'talla', type: 'varchar', length: 50, nullable: true })
  talla: string

  @Column({ name: 'peso', type: 'varchar', length: 50, nullable: true })
  peso: string

  @Column({ name: 'temperatura', type: 'varchar', length: 50, nullable: true })
  temperatura: string

  @Column({
    name: 'presion_arterial',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  presionArterial: string

  @Column({
    name: 'frecuencia_respiratoria',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  frecuenciaRespiratoria: string

  @Column({
    name: 'frecuencia_cardiaca',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  frecuenciaCardiaca: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  sonda: string

  @Column({ name: 'imc', type: 'varchar', length: 50, nullable: true })
  imc: string

  @Column({ name: 'estado_imc', type: 'varchar', length: 50, nullable: true })
  estadoImc: string

  @Column({ name: 'id_atencion' })
  idAtencion: number

  @ManyToOne(() => Atencion, (atencion) => atencion, {
    nullable: true,
  })
  @JoinColumn({ name: 'id_atencion' })
  atencion: Atencion
}
