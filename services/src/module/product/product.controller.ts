import { Controller  } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {  ProductDeleteDto, ProductUpdateDto } from './dtos';
import { CommandProduct } from './enums';
import { ProductCreateRequest } from './interfaces';
import { ProductGetDto, ProductGetStatusDto } from './dtos/product-get.dtos';


@Controller()
export class ProductController {
  private readonly service: ProductService;
  constructor(service: ProductService) {
    this.service = service;
  }

  @MessagePattern(CommandProduct.PRODUCT_CREATE)
  createProduct(
    @Payload() payload: ProductCreateRequest,) {
    return this.service.createproduct(payload);
  }


  @MessagePattern(CommandProduct.PRODUCT_DELETE)
  deleteProduct(
    @Payload() payload: ProductDeleteDto,) {
      
    return this.service.deleteMarket(payload);
  }

  @MessagePattern(CommandProduct.PRODUCT_UPDATE)
  updateProduct(
    @Payload() payload: ProductUpdateDto,) {
      
    return this.service.updateProduct(payload);
  }

  @MessagePattern(CommandProduct.PRODUCT_GET)
  getProduct(
   @Payload() payload: ProductGetDto) {
     
   return this.service.getProduct(payload);
 }

  @MessagePattern(CommandProduct.PRODUCT_GET_STAUS)
  getProductStatus(
    @Payload() payload: ProductGetStatusDto) {
      
   return this.service.getProductStatus(payload);
  }
}

