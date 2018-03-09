import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-libros-general',
  template: `
  <div class="container">
  <div class="row">
    <bbl-libros-gservice class="col-6"></bbl-libros-gservice>
    <bbl-libros-buscar class="col-6"></bbl-libros-buscar>
  </div>
</div>
  `,
  styles: []
})
export class LibrosGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
