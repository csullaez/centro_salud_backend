import { Controller, Get, Param } from '@nestjs/common'
import { UsuarioService } from '../service/usuario.service'

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get(':id')
  async buscarUsuarioPorId(@Param() param) {
    const { id } = param
    const resultado = this.usuarioService.buscarUsuarioPorId(id)
    return resultado
  }
}
