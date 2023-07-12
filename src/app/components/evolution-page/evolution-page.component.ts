import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-evolution-page',
  templateUrl: './evolution-page.component.html',
  styleUrls: ['./evolution-page.component.scss']
})
export class EvolutionPageComponent implements OnInit {
  @Input() profileData:any;
  pokemon: any = null;
  subscriptions: Subscription[] = [];

  constructor(private pokemonService: PokemonService){}

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    this.pokemon=this.profileData;
    this.getEvolution();
  }

  getEvolution() {
    if (!this.pokemon.evolutions || !this.pokemon.evolutions.length) {
      this.pokemon.evolutions = [];
      this.subscription = this.pokemonService.getSpecies(this.pokemon.name).subscribe(response => {
        const id = this.getId(response.evolution_chain.url);
        this.subscription = this.pokemonService.getEvolution(id).subscribe(response => this.getEvolves(response.chain));
      });
    }
  }

  getEvolves(chain: any) {
    let level = chain.evolution_details.length>0?chain.evolution_details[0].min_level:0;
    this.pokemon.evolutions.push({
      id: this.getId(chain.species.url),
      name: chain.species.name,
      level:level
    });

    if (chain.evolves_to.length) {
      this.getEvolves(chain.evolves_to[0]);
    }
  }

  getId(url: string): number {
    const splitUrl = url.split('/')
    return +splitUrl[splitUrl.length - 2];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }
}
