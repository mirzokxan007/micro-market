import { ApiProperty } from "@nestjs/swagger";
import type { SignInRequest, SignInResponse } from "@clients";
import { SignInRequestRestore } from "clients/user/interfaces/sign-in.interfaces";

export class SignInDto implements SignInRequest {
    @ApiProperty({
        example: 'johnwick123'
    })
    username: string

    @ApiProperty({
        example: '*********'
    })
    password: string
}

export class SignRestoreDto implements SignInRequestRestore {
    @ApiProperty({
        example: 'ha'
    })
    status: string;
}

export class SignInResponseDto implements SignInResponse {
    @ApiProperty({
        example: 'Bearer token...'
    })
    accessToken: string

    @ApiProperty({
        example: 'token....'
    })
    refreshToken: string
}