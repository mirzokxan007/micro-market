import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { userConfig } from 'config/user.config';
import { OrderGatewayModule } from 'module/order/order.module';
import { ProductGatewayModule } from 'module/product';
import { SubCategoryGatewayModule } from 'module/subcategory';
import { UserGetGatewayModule } from 'module/user_for_get/user_get.module';
import { marketConfig } from './config';
import { CategoryGatewayModule, UserGatewayModule } from './module';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [marketConfig,userConfig],
      isGlobal: true,
    }),
    CategoryGatewayModule,
    UserGatewayModule,
    SubCategoryGatewayModule,
    ProductGatewayModule,
    OrderGatewayModule,
    UserGetGatewayModule
  ]
})
export class App {}
