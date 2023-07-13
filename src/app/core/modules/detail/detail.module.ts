import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailPageComponent } from './components/detail-page';
import { ProfilePageComponent } from './components/profile-page';
import { EvolutionPageComponent } from './components/evolution-page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DetailPageComponent,ProfilePageComponent,EvolutionPageComponent],
  imports: [
    SharedModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
