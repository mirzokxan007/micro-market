import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ProductUpdateRequest} from '../interfaces';


export class ProductUpdateDto implements ProductUpdateRequest {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;


  @IsString()
  @IsNotEmpty()
  title: string;


  @IsString()
  @IsNotEmpty()
  status: string;


  @IsString()
  @IsNotEmpty()
  description: string;


  @IsString()
  @IsNotEmpty()
  price: string;


  @IsUUID()
  @IsString()
  @IsNotEmpty()
  subcategoryId: string;


}