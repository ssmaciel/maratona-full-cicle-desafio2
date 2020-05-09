import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaModule } from './maratona/maratona.module';
import { Maratona } from './maratona/maratona/models/maratona.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Maratona],
    }),
    MaratonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
