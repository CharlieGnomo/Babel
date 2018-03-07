import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bbl-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() hNombre: string;
  @Output() respuesta: EventEmitter<string>; // = new EventEmitter(); otra opcion
  miNombre: string;
  constructor() {
    this.respuesta = new EventEmitter();
  }

  ngOnInit() {
  }

  btnRespuesta() {
    this.respuesta.emit(this.miNombre);
  }

}
