import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { Persona } from './entity/persona.entity'
import { Paciente } from './entity/paciente.entity'
import { PersonaController } from './controller/persona.controller'
import { PersonaRepository } from './repository/persona.repository'
import { PersonaService } from './service/persona.service'

@Module({
  providers: [PersonaRepository, PersonaService],
  exports: [PersonaService],
  controllers: [PersonaController],
  imports: [TypeOrmModule.forFeature([Persona, Paciente])],
})
export class PacienteModule {}
