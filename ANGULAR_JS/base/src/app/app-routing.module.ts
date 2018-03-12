import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule' },
{ path: 'comunics', loadChildren: './comunics/comunics.module#ComunicsModule' },
{ path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule' },
{ path: 'impresora', loadChildren: './impresora/impresora.module#ImpresoraModule' },
{ path: 'libros', loadChildren: './libros/libros.module#LibrosModule' },
{ path: 'contactos', loadChildren: './contactos/contactos.module#ContactosModule' },
{ path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
