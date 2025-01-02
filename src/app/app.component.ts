import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showHome:boolean=true;

  title = 'pokedemo';

  favorites:number[]=[];

  id:string = '';

  addId(event:any){
    this.favorites.push(event);
  }

  retrieveId(event:any){
    this.favorites = this.favorites.filter(e => e != event);
  }

  show(event:any){
    this.showHome = event;
  }

  getId(event:any){
    this.id = event
  }

}
