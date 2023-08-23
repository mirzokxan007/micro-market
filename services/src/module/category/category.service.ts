import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { CategoryDeleteDto, CategoryUpdateDto } from './dtos';
import type{ CategoryCreateRequest, CategoryDeleteRequest } from './interfaces';

@Injectable()
export class CategoryService {
   readonly #_prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async createMarket(payload: CategoryCreateRequest) {
    await this.#_checkExistingCategory({ title: payload.title })

    const category = await this.#_prisma.category.create({
        data: {
            title:payload.title
        },
        select: {
            id: true
        }
    })
    return null
  }

  async deleteMarket(payload: CategoryDeleteDto) {

    const category = await this.#_checkCategopry({ id:payload.id })

    const deletesubcategory = await this.#_prisma.subCategory.updateMany({
      where: {
        categoryId: payload.id,
        deletedAt:null
      },
      data:{
        deletedAt:new Date
      }
    })


    const deleteCategory = await this.#_prisma.category.updateMany({
      where: {
        id: payload.id,
        deletedAt:null
      },
      data:{
        deletedAt:new Date
      }
    })
        
        
    return null
    
  }  

  async updateMarket(payload: CategoryUpdateDto) {
    const category = await this.#_checkCategopry({ id:payload.id })

    const updateCategory = await this.#_prisma.category.update({
      where: {
        id: payload.id,
      },
      data: {
        title: payload.title,
      },
    })
        
        
    return null
    
  }

  async getMarket({}: any) {
    const list = await this.#_prisma.category.findMany(
        {
          where:{
            deletedAt:null
          }
        }
    ) 
    
    return list
  }

  async #_checkCategopry(payload: CategoryDeleteRequest ): Promise<null> {
    const category = await this.#_prisma.category.findFirst({
        where: {
            id:payload.id,
            deletedAt:null
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

  async #_checkExistingCategory(payload:CategoryCreateRequest ): Promise<null> {
    const category = await this.#_prisma.category.findFirst({
        where: {
            title: payload.title,
            deletedAt: null
        },
        select: {
            id: true
        }
    })
    if(category) {
        throw new ConflictException('Category already exists')
    }
    return null
}



  
  }

