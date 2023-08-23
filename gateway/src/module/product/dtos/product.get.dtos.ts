import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { ProductGetRequest, ProductGetStatusRequest } from "clients/product/interfaces";

export class ProductGetDto implements ProductGetRequest {
    @ApiProperty({
      example :'id'
    })
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    subcategoryId: string;
}

export class ProductGetStatusDto implements ProductGetStatusRequest {
  @ApiProperty({
    example :'sale'
  })
  @IsString()
  @IsNotEmpty()
  status: string;
}
