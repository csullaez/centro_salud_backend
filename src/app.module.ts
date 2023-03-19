import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PacienteModule } from './paciente/paciente.module'

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
        // entities: [__dirname + '../../../../**/*.entity{.ts,.js}'],
        // keepConnectionAlive: true,
        // synchronize: false,
      }),
    }),
    PacienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
