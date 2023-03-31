import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { Usuario } from '../entity/usuario.entity'

@Injectable()
export class UsuarioRepository {
  constructor(private dataSource: DataSource) {}
  async buscarUsuarioPorId(id: number) {
    return await this.dataSource
      .getRepository(Usuario)
      .createQueryBuilder('usuario')
      .where({ id })
      .getOne()
  }
}
