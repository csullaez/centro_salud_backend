import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { CrearPacienteDto } from '../dto/crear-paciente.dto'
import { Paciente } from '../entity/paciente.entity'

@Injectable()
export class PacienteRepository {
  constructor(private dataSource: DataSource) {}

  async crear(pacienteDto: CrearPacienteDto) {
    // TODO: Adicionar creacion de persona y los datos necesarios para paciente
    return await this.dataSource
      .getRepository(Paciente)
      .save({ ...pacienteDto })
  }
}
