import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

 get historial(){
  return this.gifsService.historial;
 }

 constructor(private gifsService:GifsService){}

 buscar(query:string):void{
  //console.log(query);
  this.gifsService.buscarGifs(query);
 }

}
