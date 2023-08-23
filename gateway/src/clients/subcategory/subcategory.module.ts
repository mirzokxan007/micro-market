import { Global, Module } from '@nestjs/common';
import { SubCategoryService } from './subcategory.service';


@Global()
@Module({
  exports: [SubCategoryService],
  providers:[SubCategoryService]
})
export class SubCategoryModule {}
