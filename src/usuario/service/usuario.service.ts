import { Inject, Injectable } from '@nestjs/common'
import { UsuarioRepository } from '../repository/usuario.repository'

@Injectable()
export class UsuarioService {
  constructor(
    @Inject(UsuarioRepository)
    private usuarioRepositorio: UsuarioRepository
  ) {}
  async buscarUsuarioPorId(id: number) {
    const resultado = await this.usuarioRepositorio.buscarUsuarioPorId(id)
    return resultado
  }
}
