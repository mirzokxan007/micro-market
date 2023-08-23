import { CategoryCreateRequest, CategoryCreateResponse, CategoryDeleteRequest, CategoryDeleteResponse, CategoryService, CategoryUpdateRequest } from '@clients';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, UseInterceptors } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { ApiBadRequestResponse,
         ApiBearerAuth,
         ApiBody, 
         ApiInternalServerErrorResponse, 
         ApiOkResponse, 
         ApiParam, 
         ApiProperty, 
         ApiTags, 
         ApiUnauthorizedResponse } from '@nestjs/swagger';
import { VerifyAccessInterceptor } from 'Interceptors';
import { CategoryCreateDto, CategoryCreateResponseDto, CategoryDeleteDto, CategoryDeleteResponseDto } from './dtos';
import { CategoryUpdateDto, CategoryUpdateResponseDto } from './dtos/category.update.dto';

@UseInterceptors(VerifyAccessInterceptor)
@ApiBearerAuth('token')
@ApiTags('CategoryMarket')
@Controller({
  path: '/category-service/',
  version: '1',
})
export class CategoryController {
   readonly #_service: CategoryService;

  constructor(service: CategoryService) {
    this.#_service = service;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('createCategory')
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiBody({type: CategoryCreateDto})
  @ApiOkResponse({type: CategoryCreateResponseDto})
  createMarket(@Payload() payload: CategoryCreateRequest):Promise<CategoryCreateResponse> { 
    
    return this.#_service.createMarket(payload)
  }


  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('deleteCategory')
  @ApiBody({type: CategoryDeleteDto})
  @ApiOkResponse({type: CategoryDeleteResponseDto})
  deleteMarket(@Payload() payload: CategoryDeleteRequest):Promise<CategoryDeleteResponse> {
    return this.#_service.deleteMarket(payload)
  }

  @HttpCode(HttpStatus.OK)
  @Patch('updateCategory')
  @ApiBody({type: CategoryUpdateDto})
  @ApiOkResponse({type: CategoryUpdateResponseDto})
  updateCategory(@Payload() payload: CategoryUpdateRequest):Promise<CategoryDeleteResponse> {
    return this.#_service.updateMarket(payload)
  } 

  @HttpCode(HttpStatus.OK)
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('list')
  getCategory() {
    return this.#_service.getCategory()
  } 
}
