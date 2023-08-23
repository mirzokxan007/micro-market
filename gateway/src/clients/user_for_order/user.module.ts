import { Global, Module } from "@nestjs/common";
import { UserGetService } from "./user.service";


@Global()
@Module({
    exports: [UserGetService],
    providers: [UserGetService]
})
export class UserGetModule {}