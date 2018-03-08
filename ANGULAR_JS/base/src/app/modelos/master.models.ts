export interface PrinterIf {
    id: string;
    name: string;
}

export class Printer implements PrinterIf {
    constructor(public id: string, public name: string) { }
}

export interface Dpto {
    id: string;
    name: string;
}

export interface UserIf {
    nombre: string;
    apellidos: string;
    telefono: string;
}
