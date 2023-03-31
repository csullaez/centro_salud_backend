import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { UsuarioService } from 'src/usuario/service/usuario.service'
import { AutenticacionController } from './autenticacion.controller'
import { AutenticacionService } from './autenticacion.service'
import * as dotenv from 'dotenv'
import { UsuarioRepository } from 'src/usuario/repository/usuario.repository'

dotenv.config()
@Module({
  imports: [
    ConfigModule,
    // PassportModule,
    JwtModule.register({
      global: true,
      secret: 'mysecretkey',
      // secret: configService.get('JWT_SECRET'),
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AutenticacionService, UsuarioService, UsuarioRepository],
  controllers: [AutenticacionController],
  exports: [AutenticacionService],
})
export class AutenticacionModule {}
