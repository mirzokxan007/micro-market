import { Transport } from '@nestjs/microservices'

declare interface AppConfig {
    mode: string,
    name:string,
    transport: Transport
    options: {
    host: string
    port: number  
  }
}

export const appConfig: AppConfig = {
    mode: process.env.APP_MODE ?? 'development',
    name: process.env.APP_NAME ?? 'getaway',
    transport: Transport.TCP,
    options: {
    host: process.env.APP_HOST ?? '127.0.0.1',
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 4001,
  },
}
