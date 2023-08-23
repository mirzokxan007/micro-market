import { CategoryUpdateRequest } from "@clients";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CategoryUpdateDto implements CategoryUpdateRequest{

    @ApiProperty({
        example :'9e8ba7c7-432c-4d5f-a674-c32d377dea32'
      })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    id?: string;


    @ApiProperty({
        example :'HAVAS'
      })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    title?: string;
}

export class CategoryUpdateResponseDto implements CategoryUpdateResponseDto{
    @ApiProperty({
        example : '233-32sw-23-32'
    })
    id:string

    @ApiProperty({
        example : 'havas'
    })
    title:string
}