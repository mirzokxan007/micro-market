import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import {  ApiProperty} from '@nestjs/swagger'
import {  ProductDeleteRequest } from 'clients/product';


export class ProductDeleteDto implements ProductDeleteRequest {
    @ApiProperty({
      example :'id'
    })
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    id: string;
}

