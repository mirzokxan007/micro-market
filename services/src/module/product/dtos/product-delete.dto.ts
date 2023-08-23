import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import {  ProductDelteRequest} from '../interfaces';



export class ProductDeleteDto implements ProductDelteRequest {
  @IsUUID()  
  @IsString()
  @IsNotEmpty()
  id: string;

}
