import { Controller, Delete, HttpCode, HttpStatus, Patch, Post, UseInterceptors } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { ApiBadRequestResponse,
         ApiBearerAuth,
         ApiBody, 
         ApiInternalServerErrorResponse, 
         ApiOkResponse, 
         ApiTags, 
         ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ProductCreateRequest, ProductCreateResponse, ProductDeleteRequest, ProductDeleteResponse, ProductService } from 'clients/product';
import { ProductGetRequest, ProductGetResponse, ProductGetStatusRequest, ProductGetStatusResponse, ProductUpdateRequest, ProductUpdateResponse } from 'clients/product/interfaces';
import { VerifyAccessInterceptor } from 'Interceptors';
import { ProductCreateDto, ProductCreateResponseDto, ProductDeleteDto, ProductGetDto, ProductGetStatusDto, ProductUpdateDto, ProductUpdateResponseDto } from './dtos';


@UseInterceptors(VerifyAccessInterceptor)
@ApiBearerAuth('token')
@ApiTags('Product')
@Controller({
  path: '/product-service/',
  version: '1',
})
export class ProductController {
   readonly #_service: ProductService;

  constructor(service: ProductService) {
    this.#_service = service;
  }

@HttpCode(HttpStatus.CREATED)
@Post('createProduct')
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@ApiBadRequestResponse({ description: 'Bad request'})
@ApiInternalServerErrorResponse({ description: 'Internal server error' })
@ApiBody({type: ProductCreateDto})
@ApiOkResponse({type: ProductCreateResponseDto})
  createProduct(@Payload() payload: ProductCreateRequest):Promise<ProductCreateResponse> {    
    return this.#_service.createProduct(payload)
  }


@HttpCode(HttpStatus.NO_CONTENT)
@Delete('deleteProduct')
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@ApiBadRequestResponse({ description: 'Bad request'})
@ApiInternalServerErrorResponse({ description: 'Internal server error' })
@ApiBody({type: ProductDeleteDto})
@ApiOkResponse({type: ProductDeleteDto})
  deleteProduct(@Payload() payload: ProductDeleteRequest):Promise<ProductDeleteResponse> {
    return this.#_service.deleteProduct(payload)
  }


@HttpCode(HttpStatus.OK)
@Patch('updateProduct')
@ApiBody({type: ProductUpdateDto})
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@ApiBadRequestResponse({ description: 'Bad request'})
@ApiInternalServerErrorResponse({ description: 'Internal server error' })
@ApiOkResponse({type: ProductUpdateResponseDto})
  updateProduct(@Payload() payload: ProductUpdateRequest):Promise<ProductUpdateResponse> {
    return this.#_service.updateProduct(payload)
  } 

@HttpCode(HttpStatus.OK)
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@ApiBadRequestResponse({ description: 'Bad request'})
@ApiInternalServerErrorResponse({ description: 'Internal server error' })
@ApiBody({type: ProductGetDto})
@Post('list')
  getProduct(@Payload() payload: ProductGetRequest):Promise<ProductGetResponse> {
    return this.#_service.getProduct(payload)
  }

@HttpCode(HttpStatus.OK)
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@ApiBadRequestResponse({ description: 'Bad request'})
@ApiInternalServerErrorResponse({ description: 'Internal server error' })
@ApiBody({type: ProductGetStatusDto})
@Post('list/status')
    getStatusProduct(@Payload() payload: ProductGetStatusRequest):Promise<ProductGetStatusResponse> {
      return this.#_service.getStatusProduct(payload)
    }

}
