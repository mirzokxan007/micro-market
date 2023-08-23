import { ApiProperty } from "@nestjs/swagger"
import { UserUpdateRequest } from "clients/user_for_order"

export class SignUpdateDto implements UserUpdateRequest {
    @ApiProperty({
        example: 'johnwick123'
    })
    username: string

    @ApiProperty({
        example: '*********'
    })
    password: string
}
