import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PrinterIf, Printer, Dpto } from '../../modelos/master.models';
import { Dptoss, Printerss } from '../../modelos/master.data';
import { OrderPrintIf } from '../../modelos/ordenprint.model';

@Component({
  selector: 'bbl-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  aPrinters: Array<PrinterIf>;
  aDptos: Array<Dpto>;
  orderPrint: OrderPrintIf;
  @ViewChild('formPrinters') formulario: any;

  constructor() { }

  ngOnInit() {
    this.aPrinters = Printerss;
    this.aDptos = Dptoss;
    this.orderPrint = {
      user: {
        nombre: '',
        apellidos: '',
        telefono: '',
      },
    printer: {
      id: '',
      name: '',
    },
    isColor: false,
    isClaro: false,
    dpto: {
      id: '',
      name: '',
    }
    };

    console.dir(this.formulario);
  }

  enviar() {
    console.log('Datos enviados');
  }

  borrar() {
    this.formulario.reset();
  }

}
