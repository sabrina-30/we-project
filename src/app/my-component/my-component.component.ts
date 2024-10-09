import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { HttpServiceService } from '../http-service.service';
import { PokemonResult } from '../pokemon-result';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
})
export class MyComponentComponent implements OnInit{

  constructor(private httpService:HttpServiceService){}

  ngOnInit(): void {
    this.httpService.getPokemons().subscribe(
      {
        next: ( data)  => {
          console.log(" data  " , data.pokemon_entries);
          data.pokemon_entries.forEach((res : any )=> {
            const name = res.pokemon_species.name;
            const url = res.pokemon_species.url;
        
            this.pokemonsResult.push(new PokemonResult(name, url));
          });
          
        }
      }
    )
  }

  id: string = '';

  stringSearch: string = '';

  pokemons : Pokemon[] = [{id:1,nom:'nom'},{id:2,nom:'nom2'},{id:3,nom:'nom3'},{id:4,nom:'nom4'},{id:5,nom:'nom5'}]

  selectedPokemon : string = '';

  pokemonsResult : PokemonResult[] = [ ];

  stats : string[] = [];
  name : string = '';


  get(){
    console.log("id ",this.id," nom ",this.stringSearch)
    this.stats = []
    this.httpService.getPokemon(this.id).subscribe(
      {
        next: ( data)  => {
          console.log(" data  " , data);
          data.stats.forEach((res : any )=> {
            this.stats.push(res.stat.name);
          });
          this.name = data.name;
        }
      }
    )
  }

}
