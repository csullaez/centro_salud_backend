import { Type } from 'class-transformer'
import { IsOptional, IsString, ValidateNested } from 'class-validator'
import { Persona } from '../entity/persona.entity'
import { CrearPersonaDto } from './crear-persona.dto'

export class CrearPacienteDto {
  @IsOptional()
  @IsString()
  alert: string

  @IsOptional()
  @IsString()
  grupoSanguineo: string

  @IsOptional()
  @IsString()
  factorRh: string

  @IsOptional()
  @IsString()
  expedido: string

  @ValidateNested()
  @Type(() => CrearPersonaDto)
  persona: Persona
}
