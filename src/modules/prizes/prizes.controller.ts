import { Controller, Get, Query, Delete, Param } from '@nestjs/common';
import { PrizesService } from './prizes.service';

@Controller('prize')
export class PrizesController {
  constructor(private readonly prizesService: PrizesService) {}

  @Get()
  async getPrizeById(@Query('prize_id') prizeId: number) {
    const prize = await this.prizesService.getPrizeById(prizeId);
    return { prize };
  }

  @Delete(':id')
  async deletePrizeById(@Param('id') prizeId: number) {
    return this.prizesService.deletePrizeById(prizeId);
  }
}
