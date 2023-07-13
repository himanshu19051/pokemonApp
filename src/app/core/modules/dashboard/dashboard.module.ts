import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListComponent } from './components/list';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
