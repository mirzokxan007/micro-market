import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientTCP } from '@nestjs/microservices'
import { firstValueFrom, timeout } from "rxjs";
import {  Command1 } from "./enums";
import { SubCategoryCreateRequest, SubCategoryCreateResponse, SubCategoryDeleteRequest, SubCategoryDeleteResponse, SubCategoryGetResponse, SubCategoryUpdateRequest, SubCategoryUpdateResponse } from "./interfaces";


@Injectable()
export class SubCategoryService {
    readonly #_client: ClientTCP

    constructor(config:ConfigService){
        this.#_client = new ClientTCP({
            host: config.getOrThrow<string>('market.host'),
            port: config.getOrThrow<number>('market.port')
        })
    }

    async createSubcategory(payload: SubCategoryCreateRequest):Promise<SubCategoryCreateResponse>{   
        return this.#_send<SubCategoryCreateResponse,SubCategoryCreateRequest>(Command1.SUBCATEGORY_CREATE,payload)
    }

    async deleteSubCategory(payload: SubCategoryDeleteRequest):Promise<SubCategoryDeleteResponse>{   
        return this.#_send<SubCategoryDeleteResponse,SubCategoryDeleteRequest>(Command1.SUBCATEGORY_DELETE,payload)
    }

    async updateSubCategory(payload: SubCategoryUpdateRequest):Promise<SubCategoryUpdateResponse>{       
        return this.#_send<SubCategoryUpdateResponse,SubCategoryUpdateRequest>(Command1.SUBCATEGORY_UPDATE,payload)
    }

    async getSubCategory(payload: SubCategoryDeleteRequest):Promise<SubCategoryGetResponse>{       
        return this.#_send<SubCategoryGetResponse,SubCategoryDeleteRequest>(Command1.SUBCATEGORY_GET,payload)
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