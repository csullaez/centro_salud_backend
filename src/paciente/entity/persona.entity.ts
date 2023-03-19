import { EstadoCivil, Genero } from 'src/application/constantes'
import { Check, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'personas' })
export class Persona {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string

  @Column({ length: 100, type: 'varchar', nullable: true })
  nombres?: string | null

  @Column({
    name: 'paterno',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  paterno?: string | null

  @Column({
    name: 'materno',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  materno?: string | null

  @Column({ name: 'nro_documento', length: 50 })
  nroDocumento: string

  @Column({ name: 'expedido', length: 50, nullable: true })
  expedido: string

  @Column({
    name: 'fecha_nacimiento',
    type: 'date',
    nullable: true,
  })
  fechaNacimiento?: Date | null

  @Check(
    `genero in ('${Genero.MASCULINO}', '${Genero.FEMENINO}', '${Genero.OTRO}')`,
  )
  @Column({ length: 15, type: 'varchar', nullable: true })
  genero?: string | null

  @Column({ name: 'direccion', length: 250, nullable: true })
  direccion: string

  @Check(`estado_civil in ('${EstadoCivil.CASADO}', '${EstadoCivil.SOLTERO}')`)
  @Column({ name: 'estado_civil', length: 15, type: 'varchar', nullable: true })
  estadoCivil?: string | null

  @Column({ name: 'nro_edificio', type: 'numeric', nullable: true })
  nroEdificio?: number | null

  @Column({ type: 'varchar', length: 25, nullable: true })
  telefono?: string

  @Column({ type: 'varchar', length: 25, nullable: true })
  ocupacion?: string

  @Column({ type: 'varchar', length: 25, nullable: true })
  escolaridad?: string

  @Column({
    name: 'persona_responsable',
    type: 'varchar',
    length: 25,
    nullable: true,
  })
  personaResponsable?: string
  /*
  @Check(
    `tipo_persona in ('${TipoPersona.EXTRANJERO}', '${TipoPersona.NACIONAL}')`,
  )
  @Column({
    name: 'tipo_persona',
    length: 15,
    type: 'varchar',
    default: TipoPersona.NACIONAL,
  })
  tipoPersona: string

  @Column({ name: 'estado_sigep', type: 'varchar', default: false })
  estadoSegip: string | null

  @OneToMany(() => Usuario, (usuario) => usuario.persona)
  usuarios: Usuario[]

  @OneToMany(() => Beneficiario, (beneficiario) => beneficiario.persona)
  beneficiarios: Beneficiario[]

  @OneToMany(() => Tutor, (tutor) => tutor.persona)
  tutores: Tutor[]

  @OneToMany(() => Domicilio, (domicilio) => domicilio.persona)
  domicilios: Domicilio[]

  constructor(data?: Partial<Persona>) {
    super(data)
  }

  @BeforeInsert()
  insertarEstado() {
    this.estado = this.estado || PersonaEstado.ACTIVE
  }*/
}
