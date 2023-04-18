import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    BusquedaComponent,
    ResultadosComponent,
    GifsPageComponent,
    GifCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
