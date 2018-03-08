import { PrinterIf, Dpto, Printer } from './master.models';

export const Printerss: Array<PrinterIf> = [
    {id: '1', name: 'HP'},
    new Printer('2', 'Brother'),
    new Printer('3', 'Lexmark')
];

export const Dptoss: Array<Dpto> = [
    {id: '1', name: 'RRHH'},
    {id: '2', name: 'Ventas'},
    {id: '3', name: 'Marketing'},
    {id: '4', name: 'Sistemas'}
];
