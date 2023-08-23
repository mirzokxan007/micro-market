import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import {  ApiProperty} from '@nestjs/swagger'
import { ProductCreateRequest } from 'clients/product';
import { OrderCreateRequest, OrderCreateResponse } from 'clients/order';


export class OrderCreateDto implements OrderCreateRequest {

    @ApiProperty({
      example :'550e8400-e29b-41d4-a716-446655440000'
    })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    productId: string;

}
export class OrderCreateResponseDto implements OrderCreateResponse{
    @ApiProperty({
        example : '233-32sw-23-32'
    })
    id:string


    @ApiProperty({
        example : '550e8400-e29b-41d4-a716-446655440000 '
    })
    user_id:string

    @ApiProperty({
      example : '550e8400-e29b-41d4-a716-446655440000 '
    })
    productId: string;
   
}
