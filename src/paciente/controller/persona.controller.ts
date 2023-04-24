import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { CrearPersonaDto } from '../dto/crear-persona.dto'
import { FiltroPersonaDto } from '../dto/filtro-query.dto'
import { PersonaService } from '../service/persona.service'

@Controller('personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Get()
  async listar(@Query() paginacionQuery: FiltroPersonaDto) {
    const resultado = await this.personaService.listar(paginacionQuery)
    return resultado
  }

  @Post()
  async crear(@Body() personaDto: CrearPersonaDto) {
    const resultado = await this.personaService.crear(personaDto)
    return resultado
  }
}
