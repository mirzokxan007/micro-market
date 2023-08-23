import { Module } from '@nestjs/common';
import { UserGetModule } from 'clients/user_for_order/user.module';
import { UserGetController } from './user_get.controller';

@Module({
  imports: [UserGetModule],
  controllers: [UserGetController],
})
export class UserGetGatewayModule {}
