import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial:string[]=[];

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query:string){
    query=query.trim().toLowerCase(); //minusculas
    
    if(!this._historial.includes(query)){ //includes: true si el elemento ExpressionStatement.
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);//almacenar solo 10 elementos
    }
    
    console.log(this._historial);
  }
}
