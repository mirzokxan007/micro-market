import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientTCP } from '@nestjs/microservices'
import { firstValueFrom, timeout } from "rxjs";
import {  CommandProduct } from "./enums";
import { ProductCreateRequest, ProductCreateResponse, ProductDeleteRequest, ProductDeleteResponse, ProductGetRequest, ProductGetResponse, ProductGetStatusRequest, ProductGetStatusResponse, ProductUpdateRequest, ProductUpdateResponse} from "./interfaces";


@Injectable()
export class ProductService {
    readonly #_client: ClientTCP

    constructor(config:ConfigService){
        this.#_client = new ClientTCP({
            host: config.getOrThrow<string>('market.host'),
            port: config.getOrThrow<number>('market.port')
        })
    }

    async createProduct(payload: ProductCreateRequest):Promise<ProductCreateResponse>{   

        return this.#_send<ProductCreateResponse,ProductCreateRequest>(CommandProduct.PRODUCT_CREATE,payload)
    }

    async deleteProduct(payload: ProductDeleteRequest):Promise<ProductDeleteResponse>{   
    
        return this.#_send<ProductDeleteResponse,ProductDeleteRequest>(CommandProduct.PRODUCT_DELETE,payload)
    }

    async updateProduct(payload: ProductUpdateRequest):Promise<ProductUpdateResponse>{   
    
        return this.#_send<ProductUpdateResponse,ProductUpdateRequest>(CommandProduct.PRODUCT_UPDATE,payload)
    }

    async getProduct(payload: ProductGetRequest):Promise<ProductGetResponse>{   
    
        return this.#_send<ProductGetResponse,ProductGetRequest>(CommandProduct.PRODUCT_GET,payload)
    }

    async getStatusProduct(payload: ProductGetStatusRequest):Promise<ProductGetStatusResponse>{   
    
        return this.#_send<ProductGetStatusResponse,ProductGetStatusRequest>(CommandProduct.PRODUCT_GET_STAUS,payload)
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