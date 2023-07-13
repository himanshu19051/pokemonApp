import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListComponent } from './components/list';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    SharedModule,
    InfiniteScrollModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
