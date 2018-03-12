import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-catalogo',
  template: `
    <p>
      catalogo works!
      <!-- <a [routerLink]="{'./book','book.id'}"></a> --> <!-- ponemos ./ ya que estaríamos dentro de catálogo, sino no funciona-->
    </p>
  `,
  styles: []
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
