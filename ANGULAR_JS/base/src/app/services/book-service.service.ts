import { Injectable } from '@angular/core';

@Injectable()
export class BookServiceService {
  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Angular Avanzado',
      'Aprendiendo Angular',
      'Master en Angular',
      'Angular Ninja',
      'Angular JS vs Angular 2: La última frontera'
    ];
  }

  getLibros(clave: string) {
    return this.aLibros;
  }

  getLibrosAsinc(clave: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.aLibros);
      }, 4000);
    });
  }

}
