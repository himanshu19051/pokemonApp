import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { LoadingService } from 'src/app/services';

@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {
  private totalRequests=0;

  constructor(private readonly loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    this.loadingService.isLoading=true;
    return next.handle(request)
    .pipe(
      catchError((error:any)=>{
        this.totalRequests--;
        this.loadingService.isLoading=false;
        return throwError(() => error);
      })
    )
    .pipe(map<HttpEvent<any>,any>((evt:HttpEvent<any>)=>{
      if(evt instanceof HttpResponse){
        this.totalRequests--;
        if(this.totalRequests===0){
          this.loadingService.isLoading=false;
        }
      }
      return evt;
    }))
  }
}
