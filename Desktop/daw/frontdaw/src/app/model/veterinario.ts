import { Base } from "./base";
import { EspecialidadVet } from "./especialidadvet";

export class Veterinario extends Base {
    //id: number;
    nombre: string;
    apellidos: string;
    celular: number;
    fch_nacimiento: Date;
    email: string;
    direccion: string;
    especialidad: EspecialidadVet
}