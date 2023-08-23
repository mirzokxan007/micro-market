import { IsNotEmpty, IsString } from 'class-validator';
import {  ApiProperty} from '@nestjs/swagger'
import { CategoryCreateRequest } from '@clients';


export class CategoryCreateDto implements CategoryCreateRequest {
  @ApiProperty({
    example :'HAVAS'
  })
  @IsString()
  @IsNotEmpty()
  title: string;
}

export class CategoryCreateResponseDto implements CategoryCreateResponseDto{
    @ApiProperty({
        example : '233-32sw-23-32'
    })
    id:string


    @ApiProperty({
        example : 'Korzinka'
    })
    title:string
}
