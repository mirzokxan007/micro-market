import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientTCP } from '@nestjs/microservices'
import { firstValueFrom, timeout } from "rxjs";
import { CommandOrder } from "./enums";
import { OrderCreateRequest, OrderCreateResponse, OrderDeleteRequest, OrderDeleteResponse, OrderGetRequest, OrderGetResponse } from "./interfaces";


@Injectable()
export class OrderService {
    readonly #_client: ClientTCP

    constructor(config:ConfigService){
        this.#_client = new ClientTCP({
            host: config.getOrThrow<string>('market.host'),
            port: config.getOrThrow<number>('market.port')
        })
    }

    async createOrder(payload: OrderCreateRequest):Promise<OrderCreateResponse>{   

        return this.#_send<OrderCreateResponse,OrderCreateRequest>(CommandOrder.ORDER_CREATE,payload)
    }

    async deleteOrder(payload: OrderDeleteRequest):Promise<OrderDeleteResponse>{   
    
        return this.#_send<OrderDeleteResponse,OrderDeleteRequest>(CommandOrder.ORDER_DELETE,payload)
    }

    async getProduct(payload: OrderGetRequest):Promise<OrderGetResponse>{   
    
        return this.#_send<OrderGetResponse,OrderGetRequest>(CommandOrder.ORDER_GET,payload)
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