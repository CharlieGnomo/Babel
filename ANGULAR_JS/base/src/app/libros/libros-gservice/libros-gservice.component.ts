import { Component, OnInit } from '@angular/core';
import { GbooksService } from '../../services/gbooks.service';

@Component({
  selector: 'bbl-libros-gservice',
  templateUrl: './libros-gservice.component.html',
  styleUrls: ['./libros-gservice.component.css']
})
export class LibrosGserviceComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;
  constructor(public gbook: GbooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.gbook.getLibros(this.clave).then((response: any) => this.aLibros = response);
  }

  /* buscarRx() {
    this.aLibros = [];
    const url = this.urlBase + this.clave;
    this.http.get(url).subscribe(
      (response: any) => {
        if (response.items) {
          response.items.forEach(element => {
            this.aLibros.push(element.volumeInfo.title);
          });
        }
      }
    );
    this.clave = '';
  } */
}
