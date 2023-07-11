import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TabEnums } from 'src/app/enum/App.enum';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit,OnDestroy  {

  subscriptions: Subscription[] = [];
  currentTab = TabEnums.PROFILE;
  Tabs=TabEnums;
  Id=-1;
  profileData:any;

  constructor(private route: ActivatedRoute,
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

  getProfileDetails(Id:number): void{
    this.subscription = this.pokemonService.getProfileDetails(Id).subscribe(res=>{
      this.profileData=res;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }
}
