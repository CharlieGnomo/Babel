import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule } from '@angular/forms';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent, SaludoComponent, SaludoLocalComponent]
})
export class HomeModule { }
