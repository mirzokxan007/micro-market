import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubCategoryController } from './subcategory.controller';
import { SubCategoryService } from './subcategory.service';


@Module({
  providers: [SubCategoryService, PrismaService],
  controllers: [SubCategoryController],
})
export class SubCategoryModule {}
