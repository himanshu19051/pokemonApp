import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListComponent,EvolutionPageComponent,DetailPageComponent,ProfilePageComponent } from './components';
import { LoadingIndicatorInterceptor } from './core/interceptor/loading-indicator.interceptor';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailPageComponent,
    EvolutionPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    InfiniteScrollModule
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingIndicatorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
