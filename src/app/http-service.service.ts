import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http :HttpClient) { }

  private idSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  addValue(newValue: string): void {
    this.idSubject.next(newValue);
  }

  getValue():Observable<string>{
    return this.idSubject.asObservable();
  }

  getPokemon(id:string):Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+id);
  }

  getPokemonInfos(url:string):Observable<any>{
    return this.http.get<any>(url);
  }

  getPokemons():Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokedex/1');
  }

}
