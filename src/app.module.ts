import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'

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
        entities: [__dirname + '../../../../**/*.entity{.ts,.js}'],
        keepConnectionAlive: true,
        synchronize: false,
        // logger: new PrintSQL(
        // configService.get('FORCE_SQL_LOG') === 'true' ||
        // (configService.get('NODE_ENV') === 'development' &&
        // configService.get('LOG_SQL') === 'true'),
        // ),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
