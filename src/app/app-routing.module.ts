import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './components';

const routes: Routes = [
  { 
    path:'',
    loadChildren: ()=>import('./core/modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {path:'detail-page/:id',
    component:DetailPageComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
