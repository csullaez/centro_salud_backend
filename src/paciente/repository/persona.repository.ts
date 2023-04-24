import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { CrearPersonaDto } from '../dto/crear-persona.dto'
import { FiltroPersonaDto } from '../dto/filtro-query.dto'
import { Persona } from '../entity/persona.entity'

@Injectable()
export class PersonaRepository {
  constructor(private dataSource: DataSource) {}
  async listar(paginacionQuery: FiltroPersonaDto) {
    const { limite, saltar } = paginacionQuery
    const query = this.dataSource
      .getRepository(Persona)
      .createQueryBuilder('persona')
      .skip(saltar)
      .limit(limite)
    return await query.getManyAndCount()
  }

  async crear(personaDto: CrearPersonaDto) {
    return await this.dataSource.getRepository(Persona).save({ ...personaDto })
  }
  async actualizar(id: string, personaDto: Partial<CrearPersonaDto>) {
    return await this.dataSource
      .getRepository(Persona)
      .update(id, { ...personaDto })
  }
}
