import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma";
import type{ OrderCreateRequest, OrderDeleteRequest } from "./interfaces";

@Injectable()
export class OrderService {
   readonly #_prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async createOrder(payload: OrderCreateRequest) {
    await this.#_checkProduct({
        productId: payload.productId,
        user_id: ""
    })
    const category = await this.#_prisma.order.create({
        data: {
            productId:payload.productId,
            user_id:payload.user_id
        },
        select: {
            id: true
        }
    })
    return null
     }

  async deleteOrder(payload: OrderDeleteRequest) {
    await this.#_checkProductOrder({
        id: payload.id,
        user_id: ""
    })
    const order = await this.#_prisma.order.updateMany({
        where: {
                id:payload.id,
                user_id:payload.user_id,
                deletedAt:null
          },
          data:{
            deletedAt:new Date
          }
         })
         return null
     }

  async #_checkProduct(payload:OrderCreateRequest ): Promise<null> {   
    const product = await this.#_prisma.product.findFirst({
        where: {
            id: payload.productId,
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
   
  async #_checkProductOrder(payload:OrderDeleteRequest ): Promise<null> {   
        const order = await this.#_prisma.order.findFirst({
            where: {
                id: payload.id,
                deletedAt: null
            },
            select: {
                id: true
            }
        })
            if(!order) {
                throw new ConflictException('Order not found')
            }
           return null
     }
}