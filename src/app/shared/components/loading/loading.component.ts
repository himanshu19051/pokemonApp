import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  
  constructor(public readonly loadingService:LoadingService){}

}
