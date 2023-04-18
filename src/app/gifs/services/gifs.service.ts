import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  public gifList:Gif[]=[];

  private _api_key:string='M1Hpwe3kyTlZl9NSXVOOsBLcueYfYFMq';
  private serviceUrl:string='https://api.giphy.com/v1/gifs';
  private _historial:string[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor( private http:HttpClient){}

  //ordenar el historial de busqueda
  organizeHistory(query:string):void{
    query=query.trim().toLowerCase(); //minusculas
    
    if(!this._historial.includes(query)){ //includes: true si el elemento Existe.
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);//almacenar solo 10 elementos
    } 
  }


  buscarGifs(query:string):void{

    this.organizeHistory(query);

    //console.log(this._historial);
    const params = new HttpParams()
    .set('api_key',this._api_key)
    .set('limit','10')
    .set('q',query);

    this.http.get<SearchResponse>(this.serviceUrl + '/search?',{params})
    .subscribe(resp=>{
      //console.log(resp.data);
      this.gifList=resp.data;
      //console.log(this.gifList);
    });
  }

}
