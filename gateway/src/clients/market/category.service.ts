import { CategoryDeleteDto } from "@module";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientTCP } from '@nestjs/microservices'
import { CategoryUpdateDto } from "module/category/dtos/category.update.dto";
import { firstValueFrom } from "rxjs";
import { Command } from "./enums";
import type { CategoryCreateRequest, CategoryCreateResponse, CategoryDeleteRequest, CategoryDeleteResponse, CategoryGetResponse } from "./interfaces";
import { CategoryUpdateResponse } from "./interfaces/category-update.interfaces";

@Injectable()
export class CategoryService {
    readonly #_client: ClientTCP

    constructor(config:ConfigService){
        this.#_client = new ClientTCP({
            host: config.getOrThrow<string>('market.host'),
            port: config.getOrThrow<number>('market.port')
        })
    }

    async createMarket(payload: CategoryCreateRequest):Promise<CategoryCreateResponse>{  
        
        return this.#_send<CategoryCreateResponse,CategoryCreateRequest>(Command.MARKET_CREATE,payload)
    }

    async deleteMarket(payload: CategoryDeleteDto):Promise<CategoryDeleteResponse>{   
        
        return this.#_send<CategoryDeleteResponse,CategoryDeleteDto>(Command.MARKET_DELETE,payload)
    }

    async updateMarket(payload: CategoryUpdateDto):Promise<CategoryUpdateResponse>{   
        
        return this.#_send<CategoryUpdateResponse,CategoryUpdateDto>(Command.MARKET_UPDATE,payload)
    }

    async getMarket(payload: CategoryUpdateDto):Promise<CategoryUpdateResponse>{   
        
        return this.#_send<CategoryUpdateResponse,CategoryUpdateDto>(Command.MARKET_UPDATE,payload)
    }


    async getCategory():Promise<CategoryGetResponse>{   
        return this.#_send<CategoryGetResponse,any>(Command.MARKET_GET,{})
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