import { Component, EventEmitter, Output } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  @Output()
  showHome= new EventEmitter<boolean>();

   constructor(private httpService:HttpServiceService){}

  stringSearch:string = '';

  get(){
    console.log('String to search:', this.stringSearch);
    this.httpService.addValue(this.stringSearch)
  }

  chagePage(val:boolean){
    this.showHome.emit(val);
  }

}
