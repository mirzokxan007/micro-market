import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Patch, Post, UseInterceptors } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { ApiBadRequestResponse,
         ApiBearerAuth,
         ApiBody, 
         ApiInternalServerErrorResponse, 
         ApiOkResponse, 
         ApiTags, 
         ApiUnauthorizedResponse } from '@nestjs/swagger';
import { UserGetRequest, UserGetResponse, UserUpdateRequest,  } from 'clients/user_for_order';
import { UserGetService } from 'clients/user_for_order/user.service';
import { VerifyAccessInterceptor } from 'Interceptors';
import { SignUpdateDto } from './dtos';



@UseInterceptors(VerifyAccessInterceptor)
@ApiBearerAuth('token')
@ApiTags('User for Product')
@Controller({
  path: '/user-service/',
  version: '1',
})
export class UserGetController {
   readonly #_service: UserGetService;

  constructor(service: UserGetService) {
    this.#_service = service;
  }

  @HttpCode(HttpStatus.CREATED)
  @Get('Userget')
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  userGet(@Payload() payload: UserGetRequest):Promise<UserGetResponse> {
    
    return this.#_service.userGet(payload)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('sign-out')
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  signOut(
      @Body() body: any
  ) {
      return this.#_service.signOut(body)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('sign-update')
  @ApiBody({type:SignUpdateDto})
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  signUpdate(
      @Body() body: UserUpdateRequest
  ) {
    console.log(body);
    
      return this.#_service.signUpdate(body)
  }

}