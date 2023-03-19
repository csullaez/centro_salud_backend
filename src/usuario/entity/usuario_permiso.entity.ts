import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from 'typeorm'
import { Usuario } from './usuario.entity'
import { Permiso } from './permiso.entity'

@Entity({ name: 'usuario_permiso' })
export class UsuarioPermiso {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number

  @Column({ type: 'int', name: 'id_usuario', nullable: true })
  idUsuario: number

  @ManyToOne(() => Usuario, (usuario) => usuario, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario

  @Column({ type: 'int', name: 'id_permiso', nullable: true })
  idPermiso: number

  @ManyToOne(() => Permiso, (permiso) => permiso, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_permiso' })
  permiso: Permiso
}
