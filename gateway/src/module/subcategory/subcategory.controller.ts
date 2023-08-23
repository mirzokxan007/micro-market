import { SubCategoryCreateRequest, SubCategoryCreateResponse, SubCategoryDeleteRequest, SubCategoryDeleteResponse, SubCategoryService, SubCategoryUpdateRequest, } from '@clients';
import { Controller, Delete, Get, HttpCode, HttpStatus, Patch, Post, UseInterceptors } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { ApiBadRequestResponse,
         ApiBearerAuth,
         ApiBody, 
         ApiInternalServerErrorResponse, 
         ApiOkResponse, 
         ApiTags, 
         ApiUnauthorizedResponse } from '@nestjs/swagger';
import { SubCategoryGetResponse, SubCategoryUpdateResponse } from 'clients/subcategory/interfaces';
import { VerifyAccessInterceptor } from 'Interceptors';
import { SubCategoryCreateDto, SubCategoryCreateResponseDto, SubCategoryDeleteDto, SuCategoryUpdateDto } from './dtos';


@UseInterceptors(VerifyAccessInterceptor)
@ApiBearerAuth('token')
@ApiTags('SubCategory')
@Controller({
  path: '/subcategory-service/',
  version: '1',
})
export class SubCategoryController {
   readonly #_service: SubCategoryService;

  constructor(service: SubCategoryService) {
    this.#_service = service;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('createSubCategory')
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiBody({type: SubCategoryCreateDto})
  @ApiOkResponse({type: SubCategoryCreateResponseDto})
  createSubcategory(@Payload() payload: SubCategoryCreateRequest):Promise<SubCategoryCreateResponse> {
    return this.#_service.createSubcategory(payload)
  }


  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('deleteSubCategory')
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiBody({type: SubCategoryDeleteDto})
  @ApiOkResponse({type: SubCategoryDeleteDto})
  deleteSubCategory(@Payload() payload: SubCategoryDeleteRequest):Promise<SubCategoryDeleteResponse> {
     return this.#_service.deleteSubCategory(payload)
  }


  @HttpCode(HttpStatus.OK)
  @Patch('updateSubCategory')
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiBody({type: SuCategoryUpdateDto})
  @ApiOkResponse({type: SuCategoryUpdateDto})
  updateSubCategory(@Payload() payload: SubCategoryUpdateRequest):Promise<SubCategoryUpdateResponse> {
    return this.#_service.updateSubCategory(payload)
  } 

  @HttpCode(HttpStatus.OK)
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiBody({type: SubCategoryDeleteDto})
  @Post('list')
  getSubCategory(@Payload() payload: SubCategoryDeleteRequest):Promise<SubCategoryGetResponse> {
    return this.#_service.getSubCategory(payload)
  } 
}
