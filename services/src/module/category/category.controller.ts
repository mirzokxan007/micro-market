import { Controller, Param  } from '@nestjs/common';
import { CategoryService } from './category.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoryCreateDto, CategoryDeleteDto, CategoryUpdateDto } from './dtos';
import { Command } from './enums';


@Controller()
export class CategoryController {
  private readonly service: CategoryService;
  constructor(service: CategoryService) {
    this.service = service;
  }

  @MessagePattern(Command.MARKET_CREATE)
  createMarket(
    @Payload() payload: CategoryCreateDto,) {
    return this.service.createMarket(payload);
  }


  @MessagePattern(Command.MARKET_DELETE)
  deleteMarket(
    @Payload() payload: CategoryDeleteDto,) {
    return this.service.deleteMarket(payload);
  }

  @MessagePattern(Command.MARKET_UPDATE)
  updateMarket(
    @Payload() payload: CategoryUpdateDto,) {
    return this.service.updateMarket(payload);
  }

  @MessagePattern(Command.MARKET_GET)
  getMarket( @Payload() payload: {}, )  
     {
    return this.service.getMarket({});
  }

}

