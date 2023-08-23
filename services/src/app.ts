import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dbConfig } from './config';
import { SubCategoryModule } from './module';
import { CategoryModule } from './module/category/category.module';
import { OrderModule } from './module/order';
import { ProductModule } from './module/product';
import { UserGetModule } from './module/user/user.module';

@Module({
  imports: [
    CategoryModule,
    SubCategoryModule,
    ProductModule,
    OrderModule,
    UserGetModule,
    ConfigModule.forRoot({
      load: [dbConfig],
      isGlobal:true,
    }),
  ],
})
export class App {}
