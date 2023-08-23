import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ProductCreateRequest} from '../interfaces';



export class ProductCreateDto implements ProductCreateRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  price: string;
  status?: string;


  @IsString()
  @IsUUID()
  @IsNotEmpty()
  subcategoryId: string;
}
