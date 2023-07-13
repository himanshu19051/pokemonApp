import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingIndicatorInterceptor } from './interceptor/loading-indicator.interceptor';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DetailModule } from './modules/detail/detail.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    DashboardModule,
    DetailModule,
    SharedModule
  ],
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingIndicatorInterceptor,
    multi:true
  }]
})
export class CoreModule { }
