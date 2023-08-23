import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';


@Module({
  providers: [CategoryService, PrismaService],
  controllers: [CategoryController],
})
export class CategoryModule {}
