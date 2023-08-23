import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { OrderDeleteRequest } from "clients/order";

export class OrderDeleteDto implements OrderDeleteRequest {
    @ApiProperty({
      example :'id'
    })
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    id: string;
}
