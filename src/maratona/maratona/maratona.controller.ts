/* eslint-disable @typescript-eslint/camelcase */
import { Controller, Get, Post, Req, Request, Param } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Maratona } from './models/maratona.entity';

@Controller('maratona')
export class MaratonaController {

    constructor(
        @InjectRepository(Maratona)
        private readonly maratonaRepository: Repository<Maratona>,
    ) {

    }

    @Get()
    async index() {
        return await this.maratonaRepository.find({
            order: {
                created_at: "DESC"
            }
        })
    }

    @Post()
    async store(@Req() request: Request) {
        const maratona = this.maratonaRepository.create(request.body as any);
        await this.maratonaRepository.save(maratona);
        return maratona;
    }
}
