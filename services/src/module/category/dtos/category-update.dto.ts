import { IsNotEmpty,IsString,IsUUID } from 'class-validator';
import { CategoryUpdateRequest } from '../interfaces';
import { CategoryDeleteRequest } from '../interfaces/category-update.interfaces';


export class CategoryUpdateDto implements CategoryUpdateRequest {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}
export class CategoryDeleteDto implements CategoryDeleteRequest{
  @IsUUID()
  @IsNotEmpty()
  id: string;
}


