import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    ResultadosComponent,
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
