import { Body, Controller, Post } from '@nestjs/common'
import { AutenticacionService } from './autenticacion.service'

@Controller('auth')
export class AutenticacionController {
  constructor(private autenticacionService: AutenticacionService) {}

  @Post('login')
  async login(@Body() usuario: any): Promise<{ token: string }> {
    const usuarioAutenticado = await this.autenticacionService.validarUsuario(
      usuario.id,
      usuario.contrasena
    )
    if (usuarioAutenticado) {
      const token = await this.autenticacionService.generarToken(
        usuarioAutenticado
      )
      console.log('token:', token)
      return { token }
    }
  }
}
