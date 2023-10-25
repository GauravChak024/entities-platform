import { Controller, Delete, Param } from '@nestjs/common';
import { CoinsService } from './coins.service';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Delete(':id')
  async deleteCoinById(@Param('id') userId: number) {
    return this.coinsService.deleteCoinById(userId);
  }
}
