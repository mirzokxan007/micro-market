import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { ProductUpdateRequest } from "clients/product";
import { ProductUpdateResponse } from "clients/product/interfaces";
import { title } from "process";

export class ProductUpdateDto implements ProductUpdateRequest {
    @ApiProperty({
      example :'id'
    })
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty({
        example :'Xavas'
    })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        example :'sale'
    })
    @IsString()
    @IsNotEmpty()
    status: string;


    @ApiProperty({
        example :'hello'
      })
    @IsString()
    @IsNotEmpty()
    description: string;


    @ApiProperty({
        example :'23$'
      })
    @IsString()
    @IsNotEmpty()
    price: string;

    @ApiProperty({
        example :'id'
      })
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    subcategoryId: string;


}


export class ProductUpdateResponseDto implements ProductUpdateResponse {
    @ApiProperty({
        example :'Xavas'
    })
    @IsString()
    @IsNotEmpty()
    title: string;


    @ApiProperty({
        example :'hello'
      })
    @IsString()
    @IsNotEmpty()
    description: string;


    @ApiProperty({
        example :'23$'
      })
    @IsString()
    @IsNotEmpty()
    price: string;

    @ApiProperty({
        example :'23$'
      })
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty({
        example :'id'
      })
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    subcategoryId: string;


}