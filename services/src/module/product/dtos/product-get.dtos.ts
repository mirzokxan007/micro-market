import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { ProductGetRequest, ProductGetStatusRequest } from "../interfaces";

export class ProductGetDto implements ProductGetRequest {
    @IsUUID()  
    @IsString()
    @IsNotEmpty()
    subcategoryId: string;
  }

export class ProductGetStatusDto implements ProductGetStatusRequest {

    @IsString()
    @IsNotEmpty()
    status: string;
  }
  