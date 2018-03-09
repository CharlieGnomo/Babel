import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GbooksService {
  urlBase: string;
  aLibros: Array<string>;
  constructor(public http: HttpClient) {
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    this.aLibros = [];
  }

  getLibros(clave: string) {
    this.aLibros = [];
    const url = this.urlBase + clave;
    return this.http.get(url).toPromise()
      .then(
        (response: any) => {
          if (response.items) {
            response.items.forEach(element => {
              this.aLibros.push(element.volumeInfo.title);
            });
          }
        }
      );
    return new Promise((resolve, reject) => resolve(this.aLibros));
  }

  getLibrosBasic(clave: string) {
    this.aLibros = [];
    const url = this.urlBase + clave;
    return this.http.get(url).toPromise();
  }

}
