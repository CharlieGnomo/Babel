import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosGeneralComponent } from './libros-general/libros-general.component';

const routes: Routes = [
  { path: '', component: LibrosGeneralComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
