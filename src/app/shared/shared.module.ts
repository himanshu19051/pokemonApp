import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule
  ],
  exports:[LoadingComponent,CommonModule]
})
export class SharedModule { }
