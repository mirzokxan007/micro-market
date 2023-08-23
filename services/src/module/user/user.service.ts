import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { UserGetRequest, UserUpdateRequest } from './interfaces';

@Injectable()
export class UserService {
   readonly #_prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async GetUsersproduct(payload: UserGetRequest) {
    const list = await this.#_prisma.order.findMany({
        where: {
            user_id: payload.user_id,
            deletedAt:null
          }
        }
    ) 

    var result = []
     for (let i = 0; i < list.length; i++) {
        let subj = list[i]
        const product = await this.#_prisma.product.findMany({
            where:{
                id: subj.productId,
                deletedAt:null
            }
        })
         let res = result.push(product)
        } 
     return result
    
  }
  async Deleteuser(payload: UserGetRequest) {
    
    const updateUser = await this.#_prisma.user.update({
        where: {
          id: payload.user_id,
        },
        data: {
          deletedAt: new Date(),
        },
      })

   return null
  
  }
  async updateuser(payload: UserUpdateRequest) {
    console.log(payload);
    
    const updateUser = await this.#_prisma.user.update({
        where: {
          id: payload.user_id,
        },
        data: {
          username:payload.username,
          password:payload.password
        },
      })

    

   return null
  
  }
}
  