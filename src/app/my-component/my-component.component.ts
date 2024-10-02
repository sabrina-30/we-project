import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
})
export class MyComponentComponent {

  id: string = '';

  stringSearch: string = '';

  pokemons : Pokemon[] = [{id:1,nom:'nom'},{id:2,nom:'nom2'},{id:3,nom:'nom3'},{id:4,nom:'nom4'},{id:5,nom:'nom5'}]

  selectedPokemon : string = '';

  go():void{
    console.log("id ",this.id," nom ",this.stringSearch)
  }

}
