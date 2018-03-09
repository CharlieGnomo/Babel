import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosBuscarComponent } from './libros-buscar/libros-buscar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    LibrosBuscarComponent
  ],
  declarations: [LibrosBuscarComponent]
})
export class LibrosModule { }
