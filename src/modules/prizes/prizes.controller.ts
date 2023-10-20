import { Controller, Get, Query } from '@nestjs/common';
import { PrizesService } from './prizes.service';

@Controller('prize')
export class PrizesController {
  constructor(private readonly prizesService: PrizesService) {}

  @Get()
  async getPrizeById(@Query('prize_id') prizeId: number) {
    const prize = await this.prizesService.getPrizeById(prizeId);
    return { prize };
  }
}
