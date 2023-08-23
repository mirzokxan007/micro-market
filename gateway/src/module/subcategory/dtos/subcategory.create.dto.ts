import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import {  ApiProperty} from '@nestjs/swagger'
import { SubCategoryCreateRequest } from '@clients';


export class SubCategoryCreateDto implements SubCategoryCreateRequest {
    @ApiProperty({
      example :'HAVAS'
    })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({
      example :'SubCategory'
    })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    categoryId: string;
}

export class SubCategoryCreateResponseDto implements SubCategoryCreateResponseDto{
    @ApiProperty({
        example : '233-32sw-23-32'
    })
    id:string


    @ApiProperty({
        example : 'Korzinka'
    })
    title:string


    @ApiProperty({
      example : 'Korzinka'
    })
    categoryId:string
}
