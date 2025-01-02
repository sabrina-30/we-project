import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { PokemonResult } from '../pokemon-result';
import { PokemonDto } from '../pokemonDto';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  @Input()
  favorites:number[]=[];

  @Output()
  retreiveId=new EventEmitter<number>();

  @Output()
  addId=new EventEmitter<number>();

  constructor(private httpService:HttpServiceService){}
  
    data:PokemonDto[]=[]
  
    ngOnInit(): void {
      this.favorites.map(id=>{
        this.httpService.getPokemon(id.toString()).subscribe(
          {
            next: ( pok)  => {
              let tmp = new PokemonDto(pok.id, pok.name,pok.sprites.front_default,pok.height,pok.weight);
              this.data.push(tmp);
            }
          }
        )
      })
    }

  
    retrieveFromFavorite(id:number){
      this.data = this.data.filter(e => e.id != id);
      this.retreiveId.emit(id);
    }
  


}
