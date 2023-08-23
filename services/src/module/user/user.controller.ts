import { Controller  } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserCommand } from './enums';
import { UserGetDto } from './dtos';
import { UserService } from './user.service';
import { UserUpdateRequest } from './interfaces';


@Controller()
export class UserController {
  private readonly service: UserService ;
  constructor(service: UserService) {
    this.service = service;
  }

  @MessagePattern(UserCommand.USER_GET)
  GetUsersproduct(
    @Payload() payload: UserGetDto,) {    
    return this.service.GetUsersproduct(payload);
  }

  @MessagePattern(UserCommand.AUTH_SIGN_OUT)
  Deleteuser(
    @Payload() payload: UserGetDto,) {   
        
    return this.service.Deleteuser(payload);
  }

  @MessagePattern(UserCommand.AUTH_SIGN_UPDATE)
  updateuser(
    @Payload() payload: UserUpdateRequest,) {   
        
    return this.service.updateuser(payload);
  }
}
