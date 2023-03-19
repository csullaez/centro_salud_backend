import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'permiso' })
export class Permiso {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number

  @Column({ name: 'nombre', nullable: true })
  nombre: string

  @Column({ name: 'nivel', nullable: true })
  nivel: number
}
