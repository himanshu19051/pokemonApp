import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { EvolutionPageComponent } from './components/evolution-page/evolution-page.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'detail-page/:id',component:DetailPageComponent},
  {path:'evolution-page',component:EvolutionPageComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
