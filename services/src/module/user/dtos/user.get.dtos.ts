import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { UserGetRequest } from "../interfaces";

export class UserGetDto implements UserGetRequest {
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    user_id: string;
  }