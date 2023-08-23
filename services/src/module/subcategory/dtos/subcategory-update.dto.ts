import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { SubCategoryUpdateRequest } from '../interfaces';


export class SubCategoryUpdateDto implements SubCategoryUpdateRequest {

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  categoryId?: string;
}
