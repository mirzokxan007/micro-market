import { Controller, Delete, HttpCode, HttpStatus, Post, UseInterceptors } from "@nestjs/common";
import { Payload } from "@nestjs/microservices";
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { OrderCreateRequest, OrderCreateResponse, OrderDeleteRequest, OrderDeleteResponse, OrderService } from "clients/order";
import { VerifyAccessInterceptor } from "Interceptors";
import { OrderCreateDto, OrderCreateResponseDto, OrderDeleteDto } from "./dtos";

@UseInterceptors(VerifyAccessInterceptor)
@ApiBearerAuth('token')
@ApiTags('Order')
@Controller({
  path: '/order-service/',
  version: '1',
})
export class OrderController {
   readonly #_service: OrderService;

  constructor(service: OrderService) {
    this.#_service = service;
  }

@HttpCode(HttpStatus.CREATED)
@Post('createOrder')
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@ApiBadRequestResponse({ description: 'Bad request'})
@ApiInternalServerErrorResponse({ description: 'Internal server error' })
@ApiBody({type: OrderCreateDto})
@ApiOkResponse({type: OrderCreateResponseDto})
  createOrder(@Payload() payload: OrderCreateRequest):Promise<OrderCreateResponse> {  
      
    return this.#_service.createOrder(payload)
  }

@HttpCode(HttpStatus.NO_CONTENT)
@Delete('DeleteOrder')
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@ApiBadRequestResponse({ description: 'Bad request'})
@ApiInternalServerErrorResponse({ description: 'Internal server error' })
@ApiBody({type: OrderDeleteDto})
@ApiOkResponse({type: OrderCreateResponseDto})
  deleteOrder(@Payload() payload: OrderDeleteRequest):Promise<OrderDeleteResponse> {  
        
      return this.#_service.deleteOrder(payload)
    }


}