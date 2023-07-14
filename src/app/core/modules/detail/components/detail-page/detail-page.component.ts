import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TabEnums } from 'src/app/core/enum/App.enum';
import { PokemonService } from 'src/app/core/services';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit,OnDestroy  {

  subscriptions: Subscription[] = [];
  currentTab!:TabEnums;
  Tabs=TabEnums;
  Id=-1;
  profileData:any;

  constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService){}

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.Id=params['id'];
      this.getProfileDetails(this.Id);
    });
  }

  /* fetching particular pokemon detail by Id */
  getProfileDetails(Id:number): void {
    this.subscription = this.pokemonService
      .getProfileDetails(Id)
      .subscribe({
        next:response=>{
          this.profileData=response;
          this.currentTab=this.Tabs.PROFILE;
        },
        error:error=>{
          this.pokemonService.navigateByUrl('');
        }
    });
  }

  /* for changing current tab */
  activeTab(tabName:TabEnums):void{
    this.currentTab=tabName;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }
}
