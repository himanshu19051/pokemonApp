import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailPageComponent } from './components/detail-page';
import { ProfilePageComponent } from './components/profile-page';
import { EvolutionPageComponent } from './components/evolution-page';


@NgModule({
  declarations: [DetailPageComponent,ProfilePageComponent,EvolutionPageComponent],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
