import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { UsuarioService } from '../service/usuario.service'

@UseGuards(AuthGuard('jwt'))
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get(':id')
  async buscarUsuarioPorId(@Param('id') id: number): Promise<any> {
    const resultado = this.usuarioService.buscarUsuarioPorId(id)
    return resultado
  }
}
