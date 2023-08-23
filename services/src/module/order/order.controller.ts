import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import type{ OrderCreateDto, OrderDeleteDto } from "./dtos";
import { CommandOrder } from "./enums";

import { OrderService } from "./order.service";

@Controller()
export class OrderController {
  private readonly service: OrderService;
  constructor(service: OrderService) {
    this.service = service;
  }

  @MessagePattern(CommandOrder.ORDER_CREATE)
  createOrder(
    @Payload() payload: OrderCreateDto) {
    return this.service.createOrder(payload);
  }

  @MessagePattern(CommandOrder.ORDER_DELETE)
  deleteOrder(
    @Payload() payload: OrderDeleteDto) {
    return this.service.deleteOrder(payload);
  }



}