import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';



@Module({
  providers: [OrderService, PrismaService],
  controllers: [OrderController],
})
export class OrderModule {}
