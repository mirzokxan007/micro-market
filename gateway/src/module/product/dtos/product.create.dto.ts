import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import {  ApiProperty} from '@nestjs/swagger'
import { ProductCreateRequest } from 'clients/product';


export class ProductCreateDto implements ProductCreateRequest {
    @ApiProperty({
      example :'HAVAS'
    })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({
      example :'description'
    })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({
      example :'23%'
    })
    @IsString()
    @IsNotEmpty()
    price: string;

    @ApiProperty({
      example :'sale'
    })
    @IsString()
    @IsNotEmpty()
    status: string;


    @ApiProperty({
      example :'SubCategory'
    })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    subcategoryId: string;
}

export class ProductCreateResponseDto implements ProductCreateResponseDto{
    @ApiProperty({
        example : '233-32sw-23-32'
    })
    id:string


    @ApiProperty({
        example : 'Korzinka'
    })
    title:string

    @ApiProperty({
      example : 'lorem ipsum'
    })
    description:string

    @ApiProperty({
      example : '5600sum'
    })
    price:string

    @ApiProperty({
      example : 'sale'
    })
    status:string


    @ApiProperty({
      example : 'id of subcategry'
    })
    subcategoryId:string
}
