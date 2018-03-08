import { Printer, Dpto, UserIf } from './master.models';

export interface OrderPrintIf {
    user: UserIf;
    printer: Printer;
    isColor: boolean;
    isClaro: boolean;
    dpto: Dpto;
}


