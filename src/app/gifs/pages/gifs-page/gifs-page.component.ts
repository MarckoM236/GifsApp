import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html'
})
export class GifsPageComponent {

  get gifList():Gif[]{
    return this.gifService.gifList;
  }
  
  constructor(private gifService:GifsService){}
}
