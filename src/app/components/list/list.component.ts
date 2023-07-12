import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, concat } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy  {
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  subscriptions: Subscription[] = [];

  constructor(private pokemonService: PokemonService) { }

  get pokemons(): any[] {
    return this.pokemonService.pokemons;
  }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    if (!this.pokemons.length) {
      this.loadMore();
    }
  }

  loadMore(): void {
    this.subscription = this.pokemonService
      .getNext().subscribe({
        next:response=>{
          this.pokemonService.next = response.next;
          const details = response.results.map((i: any) => this.pokemonService.get(i.url));
          this.subscription = concat(...details).subscribe((response: any) => {
            this.pokemonService.pokemons.push(response);
          });
        },
        error:error=>{
          console.log('Error Occurred:', error)
        },
        complete: () => {
          console.log('Request complete');
        }
    });
  }

  onScrollDown() {
    if(this.pokemonService.next!=null){
      this.loadMore();
    } 
    console.log('scrolled down!!');
  }

  navigateToProfile(id:string){
    this.pokemonService.navigateByUrl(`/detail-page/${id}`);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }
}
