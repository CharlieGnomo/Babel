import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunicsRoutingModule } from './comunics-routing.module';
import { ComunicsComponent } from './comunics.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ComunicsRoutingModule,
    FormsModule
  ],
  exports: [
    ComunicsComponent
  ],
  declarations: [ComunicsComponent, PadreComponent, HijoComponent]
})
export class ComunicsModule { }
