import { SubCategoryModule } from '@clients';
import { Module } from '@nestjs/common';
import { SubCategoryController } from './subcategory.controller';

@Module({
  imports: [SubCategoryModule],
  controllers: [SubCategoryController],
})
export class SubCategoryGatewayModule {}
