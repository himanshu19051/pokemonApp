import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingIndicatorInterceptor } from './interceptor/loading-indicator.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingIndicatorInterceptor,
    multi:true
  }]
})
export class CoreModule { }
