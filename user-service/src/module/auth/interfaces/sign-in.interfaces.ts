export declare interface SignInRequest {
    username: string
    password: string
    status?:string
}

export declare interface SignInResponse {
    accessToken: string
    refreshToken: string
}
export declare interface SignInRequestRestore {
    status: string
   
}
