import { Base } from './base';

export class Trabajador extends Base {
    id: number;
    nombre: string;
    apellido: string;
    celular: number;
    fch_nacimiento: Date;
    correo: string;
    usuario: string;
    clave: string;
}