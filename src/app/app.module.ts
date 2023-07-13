import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EvolutionPageComponent,ProfilePageComponent } from './components';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent,
    EvolutionPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
