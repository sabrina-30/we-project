import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http :HttpClient) { }


  getPokemon(id:string):Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+id);
  }

  getPokemons():Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokedex/1');
  }

}
