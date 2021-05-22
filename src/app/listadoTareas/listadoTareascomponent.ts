/* --------------------------------- IMPORTS -------------------------------- */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TareaService } from 'src/app/serv/tarea.service';
import { ArrayTareasService } from 'src/app/serv/arrayTareas.service';


@Component({
  selector: 'app-listadoTareas2',
  templateUrl: './listadoTareas.component.html',
  styleUrls: ['./listadoTareas.component.scss'],
  providers: [ArrayTareasService, TareaService]
})

/* ---------------------------------- CLASE --------------------------------- */
export class listadoTareasComponent implements OnInit {

  constructor(
    public tareaService: ArrayTareasService,
    private route: Router
  ) { }

  ngOnInit(): void {

  }
  /**
   * Navega a la vista de modificacion siempre que el estado no sea cerrado
   */
  onClick(tarea: any) {
    if (tarea.estado === '1' || tarea.estado === '2') {

      this.route.navigate(['/modificar', tarea.id]);
    }
  }
  /**
   * Funcion del boton X
   */
  onX(tarea: any) {
    this.tareaService.eliminarTarea(tarea).subscribe(datos => {
      console.log("onx: ", datos);
    });
  }
}
