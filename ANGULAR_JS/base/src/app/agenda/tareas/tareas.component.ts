import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  sTarea: string;
  aTareas: Array<string>;

  constructor() {  }

  ngOnInit() {
    this.aTareas = new Array<string>();
  }

  addTarea() {
    if (this.sTarea.length) {
      this.aTareas.push(this.sTarea);
    }
  }

  deleteTarea(index) {
      this.aTareas.splice(index, 1);
  }

}
