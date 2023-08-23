import {  INestMicroservice, ValidationPipe } from '@nestjs/common'
import { ClientProxy, ClientsModule,  Transport } from '@nestjs/microservices'
import { Test } from '@nestjs/testing'
import { PrismaModule, PrismaService } from '../../../prisma'
import { ConfigModule } from '@nestjs/config'
import { dbConfig } from '../../../config'
import { AuthModule } from '../auth.module'
import { firstValueFrom } from 'rxjs'
import { AuthService } from '../auth.service'
import {  SignUpResponse } from '../interfaces'


describe('user.module',(): void =>{
    let server: INestMicroservice
    let client: ClientProxy
    
    beforeAll(async(): Promise<void> => {
        const module = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    load: [dbConfig],
                    isGlobal: true,
                }),
                AuthModule,
                PrismaModule
            ],
        })
    .overrideProvider(PrismaService)
    .useValue({
        users:{ 
                findMany:jest.fn().mockResolvedValue( {
                    accessToken:'',
                    refreshToken:''
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
    describe('User service', (): void => {
        it('should return sign up', async(): Promise<void> => {
            const result = {
                accessToken:'',
                refreshToken:''
            }
          
            const response = await firstValueFrom(
                client.send('user-service.auth.sign-up', {
                    username: "eshmat1ww",
                    password: "12QWasa_?"
                })
            )
            const spyService = jest.
                    spyOn(server.get(AuthService),'signUp')
                    .mockImplementation(async():Promise<SignUpResponse> => result)
            expect(response).toEqual(result)
            spyService.mockRestore()
        })
    })
})