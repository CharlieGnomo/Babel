import { UserIf } from './master.models';

export interface ContactoIf extends UserIf {
    telefono: string;
}

/**
 * Hay 2 formas de llevar la lógica:
 *  1. En el padre --> Modelo controlador presentador
 *  2. En los hijos
 */
