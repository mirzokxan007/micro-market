import {  SubCategoryUpdateRequest } from "@clients";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";

export class SuCategoryUpdateDto implements SubCategoryUpdateRequest {
    @ApiProperty({
      example :'9e8ba7c7-432c-4d5f-a674-c32d377dea32'
    })
    @IsUUID()
    id: string;


    @ApiProperty({
        example:'title'
      })
    title?: string;

    @ApiProperty({
        example :'id'
      })
    @IsUUID()
    categoryId?: string;
}