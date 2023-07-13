import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path:'',
    loadChildren: ()=>import('./core/modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  { 
    path:'page',
    loadChildren: ()=>import('./core/modules/detail/detail.module').then(m=>m.DetailModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
