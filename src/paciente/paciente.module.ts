import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { Persona } from './entity/persona.entity'
import { Paciente } from './entity/paciente.entity'

@Module({
  providers: [],
  exports: [],
  imports: [TypeOrmModule.forFeature([Persona, Paciente])],
})
export class PacienteModule {}
