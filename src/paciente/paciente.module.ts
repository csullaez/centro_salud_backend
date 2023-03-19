import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { Persona } from './entity/persona.entity'

@Module({
  providers: [],
  exports: [],
  imports: [TypeOrmModule.forFeature([Persona])],
})
export class PacienteModule {}
