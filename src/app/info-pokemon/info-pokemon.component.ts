import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrl: './info-pokemon.component.css'
})
export class InfoPokemonComponent {

  @Input()
  name:string = '';

  @Input()
  id:string = '';

  @Input()
  stats:string[] = [];

  @Input()
  image:string = '';

}
