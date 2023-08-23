export declare interface SignInRequest {
    username: string
    password: string
}

export declare interface SignInRequestRestore {
    status: string
   
}

export declare interface SignInResponse {
    accessToken: string
    refreshToken: string
}
