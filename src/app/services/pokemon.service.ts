import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = environment.apiUrl + 'pokemon/';
  private _pokemons: any[] = [];
  private _next: string = '';

  constructor(private http: HttpClient,
              private router: Router) { }

  get pokemons(): any[] {
    return this._pokemons;
  }

  get next(): string {
    return this._next;
  }

  set next(next: string) {
    this._next = next;
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getProfileDetails(id:number): Observable<any>{
    return this.get(this.url+id);
  }

  getNext(): Observable<any> {
    const url = this.next === '' ? `${this.url}?offset=0&limit=12` : this.next;
    return this.http.get<any>(url);
  }

  navigateByUrl(url:string){
    this.router.navigateByUrl(url);
  }
}
