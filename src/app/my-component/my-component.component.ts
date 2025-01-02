import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { PokemonResult } from '../pokemon-result';
import { PokemonDto } from '../pokemonDto';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
})
export class MyComponentComponent implements OnInit{

  @Input()
  favorites:number[]=[];


  @Output()
  retreiveId=new EventEmitter<number>();

  @Output()
  addId=new EventEmitter<number>();

  constructor(private httpService:HttpServiceService){}

  data:PokemonDto[]=[]

  ngOnInit(): void {
    this.getData('');
    this.httpService.getValue().subscribe({
      next:(val) =>{
        this.data = [];
        if(val != '') {
          this.httpService.getPokemon(val).subscribe(
            {
              next: ( pok)  => {
              this.data.push(new PokemonDto(pok.id, pok.name,pok.sprites.front_default,pok.height,pok.weight));
                
              }
            }
          )
        }else{
          this.getData('');
        }

      }
    })
    
  }

  getData(id:string){
    this.data = [];
    this.httpService.getPokemon(id).subscribe(
      {
        next: ( data)  => {
          let results:PokemonResult[] = data.results;
          results.map(e=>{
            this.httpService.getPokemonInfos(e.url).subscribe(
              {
                next: ( pok)  => {
                  let tmp = new PokemonDto(pok.id, pok.name,pok.sprites.front_default,pok.height,pok.weight);
                  this.data.push(tmp);
                }
              }
            )
          })
        }
      }
    )
  }

  addToFavorite(id:number){
    this.addId.emit(id);
  }

  retrieveFromFavorite(id:number){
    this.retreiveId.emit(id);
  }

}
