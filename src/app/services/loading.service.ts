import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading = false;

  set isLoading(val:boolean){
    this.loading=val;
  }

  get isLoading(){
    return this.loading;
  }
}
