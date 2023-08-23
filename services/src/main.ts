import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { TcpOptions, Transport } from '@nestjs/microservices'
import { App } from './app'
import { appConfig } from './config'
import { BaseCustomExceptionFilter } from './filters'

setImmediate(async (): Promise<void> => {
  const app = await NestFactory.createMicroservice<TcpOptions>(App, {
    transport: Transport.TCP,
    options: appConfig.options,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
    }),
  )

  app.useGlobalFilters(new BaseCustomExceptionFilter())


  await app.listen()
})