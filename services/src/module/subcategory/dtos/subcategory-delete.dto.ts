import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { SubCategoryDeleteRequest } from '../interfaces';


export class SubCategoryDeleteDto implements SubCategoryDeleteRequest {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;
}
