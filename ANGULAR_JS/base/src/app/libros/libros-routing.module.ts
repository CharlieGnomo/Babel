import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosBuscarComponent } from './libros-buscar/libros-buscar.component';

const routes: Routes = [
  { path: '', component: LibrosBuscarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
