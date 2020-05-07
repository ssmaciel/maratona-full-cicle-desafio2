import { Module } from '@nestjs/common';
import { MaratonaController } from './maratona/maratona.controller';
import { MaratonaService } from './maratona/maratona.service';
import { ConfigService } from '@nestjs/config';
import { Maratona } from './maratona/models/maratona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Maratona]),
  ],
  controllers: [MaratonaController],
  providers: [MaratonaService, ConfigService]
})
export class MaratonaModule { }
