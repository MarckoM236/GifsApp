import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
 
  constructor(private gifsService:GifsService){}

  Buscar(){
    const valor=this.txtBuscar.nativeElement.value;

    //Validar que el string no este vacio
    if(valor.trim().length===0){
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value='';
 }
}
