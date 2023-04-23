import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { UsuarioService } from 'src/usuario/service/usuario.service'
import { AutenticacionController } from './autenticacion.controller'
import { AutenticacionService } from './autenticacion.service'
import { UsuarioRepository } from 'src/usuario/repository/usuario.repository'
import { PassportModule } from '@nestjs/passport'

import * as dotenv from 'dotenv'
import { JwtStrategy } from './strategies/jwt.strategy'
dotenv.config()
@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      global: true,
      secret: 'my-secret-key',
      // secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    AutenticacionService,
    UsuarioService,
    UsuarioRepository,
    JwtStrategy,
  ],
  controllers: [AutenticacionController],
  exports: [AutenticacionService],
})
export class AutenticacionModule {}
