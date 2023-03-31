import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AutenticacionModule } from './autenticacion/autenticacion.module'
import { PacienteModule } from './paciente/paciente.module'
import { UsuarioModule } from './usuario/usuario.module'

import * as dotenv from 'dotenv'
// import dotenv from 'dotenv'

dotenv.config()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'centro_salud_db',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        keepConnectionAlive: true,
        synchronize: false,
        logging: true,
      }),
    }),
    PacienteModule,
    AutenticacionModule,
    UsuarioModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
