import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosBuscarComponent } from './libros-buscar/libros-buscar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LibrosGserviceComponent } from './libros-gservice/libros-gservice.component';
import { LibrosGeneralComponent } from './libros-general/libros-general.component';
import { BookServiceService } from '../services/book-service.service';
import { GbooksService } from '../services/gbooks.service';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    LibrosBuscarComponent,
    LibrosGserviceComponent,
    LibrosGeneralComponent
  ],
  declarations: [LibrosBuscarComponent, LibrosGserviceComponent, LibrosGeneralComponent],
  providers: [BookServiceService, GbooksService]
})
export class LibrosModule { }
