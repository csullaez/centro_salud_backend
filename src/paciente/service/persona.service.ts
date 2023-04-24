import { Inject, Injectable } from '@nestjs/common'
import { CrearPersonaDto } from '../dto/crear-persona.dto'
import { FiltroPersonaDto } from '../dto/filtro-query.dto'
import { PersonaRepository } from '../repository/persona.repository'

@Injectable()
export class PersonaService {
  constructor(
    @Inject(PersonaRepository) private personaRepository: PersonaRepository
  ) {}

  async listar(paginacionQuery: FiltroPersonaDto) {
    const resultado = await this.personaRepository.listar(paginacionQuery)
    return resultado
  }

  async crear(personaDto: CrearPersonaDto) {
    const resultado = await this.personaRepository.crear(personaDto)
    return resultado
  }
}
