import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent,EvolutionPageComponent,DetailPageComponent } from './components';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'detail-page/:id',component:DetailPageComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
