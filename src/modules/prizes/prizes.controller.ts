import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common';
import { PrizesService } from './prizes.service';
import { Prize } from '../entities/prizes.entity'

@Controller('prize')
export class PrizesController {
  constructor(private readonly prizesService: PrizesService) {}

  @Get('all')
  async getAllPrizes() {
    const users = await this.prizesService.getAllPrizes();
    return { users };
  }
  @Get(':prize_id')
  async getPrizeById(@Param('prize_id') prizeId: number) {
    const prize = await this.prizesService.getPrizeById(prizeId);
    return { prize };
  }
  @Post('add')
  async createPrize(@Body() createPrizeDto: Prize) {
    console.log("entered create user");
    const user = await this.prizesService.createPrize(createPrizeDto);
    return { user };
  }

  @Delete(':id')
  async deletePrizeById(@Param('id') prizeId: number) {
    return this.prizesService.deletePrizeById(prizeId);
  }
}
