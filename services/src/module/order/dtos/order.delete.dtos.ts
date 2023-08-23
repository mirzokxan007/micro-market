import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { OrderDeleteRequest } from "../interfaces";


export class OrderDeleteDto implements OrderDeleteRequest {
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsUUID()
    @IsString()
    @IsNotEmpty()
    user_id: string;
}
