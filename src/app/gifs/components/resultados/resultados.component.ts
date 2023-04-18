import { Component,Input } from '@angular/core';

import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {
  @Input() gifs:Gif[]=[];

}
