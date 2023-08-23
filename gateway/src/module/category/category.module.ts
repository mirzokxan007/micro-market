import { CategoryModule } from '@clients';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';

@Module({
  imports: [CategoryModule],
  controllers: [CategoryController],
})
export class CategoryGatewayModule {}
