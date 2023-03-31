import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsuarioService } from 'src/usuario/service/usuario.service'
import { compare } from 'bcrypt'

@Injectable()
export class AutenticacionService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService
  ) {}

  async validarUsuario(id: number, password: string) {
    const usuario = await this.usuarioService.buscarUsuarioPorId(id)
    const comparacion = await compare(password, usuario.password)
    if (usuario && comparacion) {
      const { password, ...result } = usuario
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async generarToken(usuario: any) {
    const payload = { correo: usuario.correo, sub: usuario.id }
    return this.jwtService.signAsync(payload)
  }
}
