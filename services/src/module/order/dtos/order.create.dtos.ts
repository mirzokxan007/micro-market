import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { OrderCreateRequest, OrderCreateResponse } from '../interfaces';


export class OrderCreateDto implements OrderCreateRequest {
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    productId: string;

    @IsString()
    @IsUUID()
    @IsNotEmpty()
    user_id: string;
}
export class OrderCreateResponseDto implements OrderCreateResponse{
    id:string
    user_id:string
    productId: string;  
}
