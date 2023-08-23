import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { SubCategoryCreateRequest } from '../interfaces';



export class SubCategoryCreateDto implements SubCategoryCreateRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  categoryId: string;
}
