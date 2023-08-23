import {  INestMicroservice, ValidationPipe } from '@nestjs/common'
import { ClientProxy, ClientsModule,  Transport } from '@nestjs/microservices'
import { Test } from '@nestjs/testing'
import { PrismaModule, PrismaService } from '../../../prisma'
import { ConfigModule } from '@nestjs/config'
import { dbConfig } from '../../../config'
import { firstValueFrom } from 'rxjs'
import { CategoryModule } from '../category.module'
import { CategoryService } from '../category.service'


describe('category.module',(): void =>{
    let server: INestMicroservice
    let client: ClientProxy
    
    beforeAll(async(): Promise<void> => {
        const module = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    load: [dbConfig],
                    isGlobal: true,
                }),
                CategoryModule,
                PrismaModule
            ],
        })
    .overrideProvider(PrismaService)
    .useValue({
        category:{ 
                findMany:jest.fn().mockResolvedValue( [ {
                    id:'1',
                    title:'we',
                    createdAt:'',
                    updatedAt:'',
                    deletedAt:''
                }]),  
                update:jest.fn().mockResolvedValue(  {
                    title:'wes',
                    createdAt:'',
                    updatedAt:'',
                    deletedAt:''
                }),
        }
    })
        .compile()
        
    const clientModule = await Test.createTestingModule({
        imports: [
          ClientsModule.register([
            {
              name: 'AuthClient',
              transport: Transport.TCP,
            },
          ]),
        ],
    }).compile()

    server = module.createNestMicroservice({
        transport: Transport.TCP,
    })

    server.useGlobalPipes(new ValidationPipe())
    
    client = clientModule.get<ClientProxy>('AuthClient')

    await server.listen()

    await client.connect()
  })
    afterAll(async(): Promise<void> => {
        client.close()
        await server.close()
    })
    describe('category service ', (): void => {
        it('should return get', async(): Promise<void> => {
            const result = [{
                id:'1',
                title:'we',
                createdAt:'',
                updatedAt:'',
                deletedAt:''
            }]
          
            const response = await firstValueFrom(
                client.send('cmd:get.category', {
                  
                })
            )
            const spyService = jest.
                    spyOn(server.get(CategoryService),'getMarket')
                    .mockImplementation(async():Promise<any> => result)
            expect(response).toEqual(result)
            spyService.mockRestore()
        })
      
    })
})