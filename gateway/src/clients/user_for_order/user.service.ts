import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientTCP } from '@nestjs/microservices'
import { firstValueFrom, timeout } from "rxjs";
import { UserGetCommand } from "./enums";
import { UserGetRequest, UserGetResponse, UserUpdateRequest, UserUpdateResponse } from "./interfaces";

@Injectable()
export class UserGetService {
    readonly #_client: ClientTCP

    constructor(config:ConfigService){
        this.#_client = new ClientTCP({
            host: config.getOrThrow<string>('market.host'),
            port: config.getOrThrow<number>('market.port')
        })
    }

    async userGet(payload:UserGetRequest):Promise<UserGetResponse>{  
         
        return this.#_send<UserGetResponse,UserGetRequest>(UserGetCommand.USER_GET,payload)
    }

    async signOut(payload: any): Promise<void> {
        return this.#_send<any, any>(UserGetCommand.AUTH_SIGN_OUT, payload)
    }

    async signUpdate(payload: UserUpdateRequest): Promise<UserUpdateResponse> {
        return this.#_send<any, UserUpdateRequest>(UserGetCommand.AUTH_SIGN_UPDATE, payload)
    }


    async #_connect():Promise<void>{
         await this.#_client.connect()
    }

     #_disconnect():void{
         this.#_client.close()
    }

     async #_send<TResponse, TRequest>(pattern:string,payload:TRequest):Promise<TResponse>{
        
         try {
            return await firstValueFrom(
                this.#_client.send<TResponse, TRequest>(pattern,payload)
             )
         } catch (error:unknown) {
            throw new InternalServerErrorException(error)
         }
    }
}