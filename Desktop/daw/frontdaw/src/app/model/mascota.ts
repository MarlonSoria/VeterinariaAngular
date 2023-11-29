import { Cliente } from "./cliente";
import { TipoMascota } from "./tipomascota";

export class Mascota {
    id_mascota: number;
    nombre: string;
    fch_nacimiento: Date;
    peso: number;
    tipo:TipoMascota;
    informacion:String;
    cli:Cliente;

  }