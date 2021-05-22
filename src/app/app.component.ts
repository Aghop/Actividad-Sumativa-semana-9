/* --------------------------------- IMPORTS -------------------------------- */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArrayTareasService } from './serv/arrayTareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/* ---------------------------------- CLASE --------------------------------- */
export class AppComponent {
  constructor(
    public tareaService: ArrayTareasService,
    private route: Router
  ) { }

  ngOnInit(): void {
    //RECORRE LAS TAREAS DEL JSON Y LAS AÑADE UNA POR UNA
    this.tareaService.start().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.tareaService.addTareas(datos[i]);
      }
    })
  }
}
