import { Profesor } from "./profesor";

export interface Curso {
    nombre: string;
    profesor: Profesor;
    duracion: string;
    comision: number;
}