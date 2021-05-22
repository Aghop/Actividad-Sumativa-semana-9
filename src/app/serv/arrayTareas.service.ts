/* --------------------------------- IMPORTS -------------------------------- */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TareaService } from './tarea.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

/* ---------------------------------- CLASE --------------------------------- */
export class ArrayTareasService {

  constructor(private servicio: HttpClient) { }

  static tareas: any = [];
  static eliminados: any = [];

  url: string = "http://localhost:8080/prueba2/backend/";


  /* -------------------------------- MÉTODOS ------------------------------- */

  /**
     * Carga las tareas del json
     */
  start(): Observable<any> {
    return this.servicio.get(`${this.url}start.php`);
  }

  /**
   * Añade una tarea nueva al array
   * @param {TareaService} tareaNueva - La tarea a agregar
   */
  addTareas(accion: TareaService): Observable<any> {
    ArrayTareasService.tareas.push(accion);
    return this.servicio.post(`${this.url}guardar.php`, JSON.stringify(this.actualizarArray()));
  }

  /**
   * Añade una tarea con la nueva informacion, mientras que 
   * la tarea antigua se añade al array de eliminados
   * @param {TareaService} tareaNueva - La tarea con la nueva información
   * @param {TareaService} tareaVieja - La tarea con la información antigua que sera eliminada
   */
  modificarTarea(tareaNueva: TareaService, tareaVieja: TareaService): Observable<any> {
    
    this.addTareas(tareaNueva).subscribe(datos => {
      console.log(datos);
    });;

    this.eliminarTarea(tareaVieja).subscribe(datos => {
      console.log(datos);
    });;
    
    return this.servicio.post(`${this.url}guardar.php`, JSON.stringify(this.actualizarArray()));
  }

  /**
   * Recorre el array, formando uno nuevo sólo con aquellas tareas que no estan eliminadas
   * @return {Array<any>} - El nuevo array 'limpio'
   */
  actualizarArray(): Array<any> {
    let aux: any = [];
    ArrayTareasService.tareas.forEach((a) => {
      if (!ArrayTareasService.eliminados.includes(a)) {
        aux.push(a);
      }
    });
    return aux;
  }
  /**
     * @return {TareaService} - El array de tareas
     */
  getTareas(): TareaService[] {
    return ArrayTareasService.tareas;
  }

  /**
   * @return {TareaService} - El array de eliminados
   */
  getEliminados(): TareaService[] {
    return ArrayTareasService.eliminados;
  }

  /**
   * Busca una tarea por id
   * @param {number} id - El id a buscar
   * @return {number} El índice de la tarea buscada
   */
  getPorId(id: number): number {
    for (let i = 0; i < ArrayTareasService.tareas.length; i++) {
      if (ArrayTareasService.tareas[i].id == id) {
        return i;
      }
    }
    return;
  }

  /**
   * Agrega la tarea al array de eliminados
   */
  eliminarTarea(accion: TareaService): Observable<any> {
    ArrayTareasService.eliminados.push(accion);
    return this.servicio.post(`${this.url}guardar.php`, JSON.stringify(this.actualizarArray()))
  }

}

