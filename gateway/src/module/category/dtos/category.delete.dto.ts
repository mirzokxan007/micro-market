import { CategoryDeleteRequest } from "@clients";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";


export class CategoryDeleteDto implements CategoryDeleteRequest {
    @ApiProperty({
      example :'9e8ba7c7-432c-4d5f-a674-c32d377dea32'
    })
    @IsUUID()
    @IsNotEmpty()
    id: string;
  }
  export class CategoryDeleteResponseDto implements CategoryDeleteResponseDto{
    @ApiProperty({
        example : '233-32sw-23-32'
    })
    id:string
}