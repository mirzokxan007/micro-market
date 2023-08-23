import type { User } from "@prisma/client";
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma";
import { sign, refreshSign } from "../../helpers";
import type { SignInRequest, SignUpRequest, SignUpResponse } from "./interfaces";

@Injectable()
export class AuthService {
    readonly #_prisma: PrismaService

    constructor(prisma: PrismaService) {
        this.#_prisma = prisma
    }

     async signUp(payload: SignUpRequest): Promise<SignUpResponse> {
        
        let user_id = await this.#_checkExistingUser({ username: payload.username })
        const newUser = await this.#_prisma.user.create({
            data: {
                username: payload.username,
                password: payload.password
            },
            select: {
                id: true
            }        
        }) 

        const token = await this.#_prisma.token.create({
            data: {
                refreshToken:refreshSign({ id: newUser.id }) ,
                accessToken: sign({ id: newUser.id })
            },
            select: {
                id: true
            } 
        })
        
        return {
            accessToken: sign({ id: newUser.id }),
            refreshToken: refreshSign({ id: newUser.id })
        }    
    }

    async signIn(payload: SignInRequest): Promise<SignUpResponse> {
        
        
        const user = await this.#_checkUser({ username: payload.username, password: payload.password,status:payload.status })
        
       
        
        let a = await this.#_prisma.token.findMany({})

        for (let i = 0; i < a.length; i++) {
            const element = a[i];
            let toke_base = element.refreshToken
            let result = JSON.parse(JSON.stringify(Buffer.from(toke_base, 'base64').toString()));
             function tokenId(arg: string) {
                let obj = ''
                let a = 0
                for (let i = 0; i < arg.length; i++) {
                  if (arg[i] == '{') {
                    a += 1
                  }
                  if (a == 2 && arg[i] !== '}') {
                    obj += arg[i]
                  }
                  if (a == 2 && arg[i] == '}') {
                    obj += '}'
                    return obj
                  }
                }
                return obj
              }
              const newObj = tokenId(result)
              let user_id = JSON.parse( newObj)        
               if ( user.id === user_id.id){
                return {
                    accessToken: await sign({ id: user.id }),
                    refreshToken: await refreshSign({ id: user.id })
                }
               }
        }  
        throw new ConflictException('Please resgister!')
    }

    async #_checkUser(payload: SignInRequest ): Promise<Pick<User, 'id'>> {
        
        const user = await this.#_prisma.user.findFirst({
            where: {
                username: payload.username,
                password: payload.password
            }
        })
        
        if(!user) {
            throw new NotFoundException('User not found')
        }else if (payload.status === "ha") {
            const updateUser = await this.#_prisma.user.updateMany({
                where: {
                    id:user.id
                },
                data: {
                  deletedAt: null
                },
              })
            return null
        }else if(payload.status === "yoq"){
            const deleteuser = await this.#_prisma.user.delete({
                where: {
                 id:user.id
                }
              })
              return null
        }else if (user.deletedAt != null){
            throw new ConflictException("Do you want restore your prifile?");   
        }

        return {
            id: user.id
        }
        
        
    }

    async #_checkExistingUser(payload: { username: string }) {
        let user = await this.#_prisma.user.findFirst({
            where: {
                username: payload.username,
                deletedAt: null
            },
            select: {
                id: true
            }
        })

        if(user) {
            throw new ConflictException('User already exists')
        }

        return null
    }
}
