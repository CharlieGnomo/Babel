import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bbl-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  sNombre: string;
  user: object;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Charlie';
    this.user = {name: 'Pepe', apellidos: 'Pérez'};
  }

  btnBorrar() {
    this.sNombre = '';
  }

}
