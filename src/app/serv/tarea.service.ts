/* --------------------------------- IMPORTS -------------------------------- */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/* ---------------------------------- CLASE --------------------------------- */
export class TareaService {
  constructor() {
  }

  estado = "";
  titulo = "";
  descripcion = "";
  id = 0;
  static idAux = 0;

  /**
   * @param {string} valor - Valores 1, 2 ó 3 para estados 'Abierto' 'En proceso' o 'Cerrado'
   */
  setEstado(valor: string) {
    this.estado = valor;
  }

  /**
   * A la par que se establece el título se establece el id
   * @param {string} valor - Título de la tarea
   */
  setTitulo(valor: string) {
    this.titulo = valor;
    this.id = TareaService.idAux;
    TareaService.idAux++;
  }

  /**
   * @param {string} valor - Descripción de la tarea
   */
  setDescripcion(valor: string) {
    this.descripcion = valor;
  }

  /**
   * Establece el título pero no un id
   * @param {string} valor - Título de la tarea
   */
  changeTitulo(valor: string) {
    this.titulo = valor;
  }
}
