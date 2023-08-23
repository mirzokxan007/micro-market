import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { SubCategoryDeleteDto, SubCategoryUpdateDto } from './dtos';
import { SubCategoryCreateRequest, SubCategoryDeleteRequest, SubCategoryUpdateRequest } from './interfaces';

@Injectable()
export class SubCategoryService {
   readonly #_prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

    async createSubcategory(payload: SubCategoryCreateRequest) {
      await this.#_checkExistingSubCategory({ title: payload.title,categoryId:payload.categoryId })
      await this.#_checkExistingCategory({ title:payload.title, categoryId:payload.categoryId})

      const subcategory = await this.#_prisma.subCategory.create({
          data: {
              title:payload.title,
              categoryId:payload.categoryId
          },
          select: {
              id: true
          }
        })
        return null
      }
    
    async deleteSubCategory(payload: SubCategoryDeleteRequest) {
      const subcategory = await this.#_checkESubCategory({ id:payload.id })

        const deleteProduct = await this.#_prisma.product.updateMany({
            where: {
                subcategoryId: payload.id,
                deletedAt: null
            },
            data:{
                deletedAt:new Date,
            }
            })

       const deleteSubCategory = await this.#_prisma.subCategory.updateMany({
             where: {
                id: payload.id,
                deletedAt: null
             },
             data:{
                deletedAt:new Date,
            }
            })
        
        
        return null
      }

    async updateSubcategory(payload: SubCategoryUpdateRequest) {
        const subcategory = await this.#_checkESubCategory({ id:payload.id })
        const cek = await this.#_checkExistingUpCategory({
            categoryId: payload.categoryId,
            id: '',
            title: ''
        })
    
        const updateCategory = await this.#_prisma.subCategory.update({
          where: {
            id: payload.id,
        
          },
          data: {
            title: payload.title,
            categoryId:payload.categoryId
          },
        })
            
            
        return null
        
      }

    async getSubcategory(payload: SubCategoryDeleteRequest) {
        const subcategory = await this.#_checkCategopry({ id:payload.id })
        const list = await this.#_prisma.subCategory.findMany({
            where: {
                categoryId: payload.id,
                deletedAt:null
              }
            }
        ) 
                   
        return list
        
      }

    async #_checkExistingSubCategory(payload:SubCategoryCreateRequest ): Promise<null> {
      const subcategory = await this.#_prisma.subCategory.findFirst({
          where: {
              title: payload.title,
              categoryId:payload.categoryId,
              deletedAt: null
          },
          select: {
              id: true
          }
      })

          if(subcategory) {
              throw new ConflictException('Subcategory already exists')
          }
          return null
      }

    async #_checkExistingCategory(payload:SubCategoryCreateRequest ): Promise<null> {
      const subcategory = await this.#_prisma.category.findFirst({
          where: {
              id: payload.categoryId,
              deletedAt: null
          },
          select: {
              id: true
          }
      })
  
          if(!subcategory) {
              throw new ConflictException('Category not found')
          }
         return null
      }

    async #_checkExistingUpCategory(payload:SubCategoryUpdateRequest ): Promise<null> {
        const subcategory = await this.#_prisma.category.findFirst({
            where: {
                id: payload.categoryId,
                deletedAt: null
            },
            select: {
                id: true
            }
        })
    
            if(!subcategory) {
                throw new ConflictException('Category not found')
            }
           return null
      }

    async #_checkESubCategory(payload:SubCategoryDeleteRequest ): Promise<null> {
        const subcategory = await this.#_prisma.subCategory.findFirst({
            where: {
                id: payload.id,
                deletedAt: null
            },
            select: {
                id: true
            }
        })
    
            if(!subcategory) {
                throw new ConflictException('Subcategory not found')
            }
           return null
      }

    async #_checkCategopry(payload: SubCategoryDeleteRequest ): Promise<null> {
        const category = await this.#_prisma.category.findFirst({
            where: {
                id:payload.id
            },
            select: {
                id: true
            }
        })
    
        if(!category) {
            throw new NotFoundException('Category not found')
        }
    
        return null
      }
}

