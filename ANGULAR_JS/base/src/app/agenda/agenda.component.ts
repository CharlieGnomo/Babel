import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-agenda',
  template: `
    <div class="container">
      <div class="row">
        <bbl-tareas class="col-12"></bbl-tareas>
      </div>
    </div>
  `,
  styles: []
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
