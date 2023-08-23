import { ArgumentsHost, Catch } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Observable, throwError } from "rxjs";

@Catch()
export class BaseCustomExceptionFilter extends BaseExceptionFilter {
    catch(exception: any, host: ArgumentsHost):Observable<void> {
        const ctx = host.switchToHttp().getRequest()
        return throwError(() => exception);
    }
}