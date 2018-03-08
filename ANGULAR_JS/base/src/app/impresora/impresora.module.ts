import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpresoraRoutingModule } from './impresora-routing.module';
import { ImpresoraComponent } from './impresora/impresora.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ImpresoraRoutingModule,
    FormsModule
  ],
  exports: [
    ImpresoraComponent
  ],
  declarations: [ImpresoraComponent, FormTdComponent]
})
export class ImpresoraModule { }
