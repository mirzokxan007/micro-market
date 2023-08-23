import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import type{ ProductCreateRequest,
             ProductDelteRequest, 
             ProductGetRequest, 
             ProductGetStatusRequest, 
             ProductUpdateRequest } from './interfaces';

@Injectable()
export class ProductService {
   readonly #_prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

    async createproduct(payload: ProductCreateRequest) {
      await this.#_checkExistingProduct({
         title:         payload.title,
         description:   payload.description,
         price:         payload.price,
         subcategoryId: payload.subcategoryId
        })
      
      const subcategory = await this.#_prisma.product.create({
        
          data: {
              title:         payload.title,
              description:   payload.description,
              price:         payload.price,
              status:        payload.status,
              subcategoryId: payload.subcategoryId
          },
          select: {
              id: true
          }
        })
       
        return null
      }
    
    async deleteMarket(payload: ProductDelteRequest) {
      await this.#_checkProduct({id:payload.id})
      const deleteProduct = await this.#_prisma.product.updateMany({
        where: {
          id: payload.id,
          deletedAt:null
        },
        data: {
          deletedAt: new Date,
        },
      })

      
      return null
      }
    
    async getProduct(payload: ProductGetRequest) {
      const cek = await this.#_checkExistingSubCategory({
        subcategoryId: payload.subcategoryId
        })
      
        const getproduct = await this.#_prisma.product.findMany({
            where: {
                subcategoryId: payload.subcategoryId,
                deletedAt:null
              }
        })
            
            
        return getproduct
        
      }
    
    async getProductStatus(payload: ProductGetStatusRequest) { 
      const cek = await this.#_checkExistingStatus({status: payload.status})    
        const getProduct = await this.#_prisma.product.findMany({
          where: {
            status: payload.status,
            deletedAt:null
          }
        })
      
        return getProduct
        
      }
    
    async updateProduct(payload: ProductUpdateRequest) {
        const product = await this.#_checkProduct({ id:payload.id })
        
         const cek = await this.#_checkExistingUpSubCategory({
           subcategoryId: payload.subcategoryId,
           id: '',
           title: '',
           description: '',
           status: '',
           price: ''
         })
     
         const updateProduct = await this.#_prisma.product.updateMany({
           where: {
             id:payload.id,
           },
           data: {
             title: payload.title,
             description:payload.description,
             price:payload.status,
             subcategoryId:payload.subcategoryId,
             status:payload.status
           },
         })
             
             
         return null
         
       }

    async #_checkExistingProduct(payload:ProductCreateRequest ): Promise<null> {
      const producct = await this.#_prisma.product.findFirst({
          where: {
              title: payload.title, 
              deletedAt: null
          },
          select: {
              id: true
          }
      })

          if(producct) {
              throw new ConflictException('Product already exists')
          }
          return null
      }

    async #_checkProduct(payload:ProductDelteRequest ): Promise<null> {   
      const product = await this.#_prisma.product.findFirst({
          where: {
              id: payload.id,
              deletedAt: null
          },
          select: {
              id: true
          }
      })
          if(!product) {
              throw new ConflictException('Product not found')
          }
         return null
      }

    async #_checkExistingUpSubCategory(payload:ProductUpdateRequest ): Promise<null> {    
        const product = await this.#_prisma.subCategory.findFirst({
            where: {
                id: payload.subcategoryId,
                deletedAt: null
            },
            select: {
                id: true
            }
        })
    
            if(!product) {
                throw new ConflictException('Subcategory not found')
            }
           return null
      }

    async #_checkExistingSubCategory(payload:ProductGetRequest ): Promise<null> {
        const product = await this.#_prisma.subCategory.findFirst({
            where: {
                id: payload.subcategoryId,
                deletedAt: null
            },
            select: {
                id: true
            }
        })
    
            if(!product) {
                throw new ConflictException('Subcategory not found')
            }
           return null
      }

    async #_checkExistingStatus(payload:ProductGetStatusRequest ): Promise<null> {
        
          const productStatus = await this.#_prisma.product.findFirst({
              where: {
                  status: payload.status,
                  deletedAt: null
              },
              select: {
                  id: true
              }
          })
      
              if(!productStatus) {
                  throw new ConflictException(`${payload.status} status not found`)
              }
             return null
        }

  }

