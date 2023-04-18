import { Component,Input } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html'
})
export class GifCardComponent {
 @Input()
 public gif!:Gif;
}
