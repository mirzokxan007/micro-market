import { IsString, IsNotEmpty } from "class-validator";
import type { SignInRequest, SignInRequestRestore } from "../interfaces";

export class SignInDto implements SignInRequest {
    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    password: string

    status?:string
}
export class SignRestoreDto implements SignInRequestRestore {
    @IsString()
    @IsNotEmpty()
    status: string;
}