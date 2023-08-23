import { CallHandler, ExecutionContext, NestInterceptor, UnauthorizedException } from "@nestjs/common";
import crypto from "crypto";
import { Observable } from "rxjs";

export class VerifyAccessInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        
        const request = context.switchToHttp().getRequest()
        
        if (!request.headers["authorization"]) {
            throw new UnauthorizedException ('Unauthorized')
        }

        const accessToken = request.headers["authorization"].replace('Bearer', '')

        let result = JSON.parse(JSON.stringify(Buffer.from(accessToken, 'base64').toString()));
        
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
          let user_id = JSON.parse(newObj)
          
           const current_user = user_id.id
          request.body.user_id = current_user

        return next.handle()
    }
}