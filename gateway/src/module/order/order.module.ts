import { Module } from '@nestjs/common';
import { OrderModule } from 'clients/order';
import { ProductModule } from 'clients/product';
import { OrderController } from './order.controller';


@Module({
  imports: [OrderModule],
  controllers: [OrderController],
})
export class OrderGatewayModule {}
