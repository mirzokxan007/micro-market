import { SubCategoryDeleteRequest } from "@clients";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";


export class SubCategoryDeleteDto implements SubCategoryDeleteRequest {
    @ApiProperty({
      example :'9e8ba7c7-432c-4d5f-a674-c32d377dea32'
    })
    @IsUUID()
    @IsNotEmpty()
    id: string;
  }

