import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  author: string;
  lugar: string;
  fecha: string;
  constructor() { }

  ngOnInit() {
    this.author = 'Carlos López Martínez';
    this.lugar = 'Babel - Madrid';
    this.fecha = '06/03/2018';
  }

}
