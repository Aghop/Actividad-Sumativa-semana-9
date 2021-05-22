/* --------------------------------- IMPORTS -------------------------------- */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TareaService } from 'src/app/serv/tarea.service';
import { ArrayTareasService } from 'src/app/serv/arrayTareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadirTarea',
  templateUrl: './anadirTarea.component.html',
  styleUrls: ['./anadirTarea.component.scss'],
  providers: [ArrayTareasService, TareaService]
})

/* ---------------------------------- CLASE --------------------------------- */
export class anadirTareaComponent implements OnInit {

  tareaForm: FormGroup
  opciones = [
    new select('1', 'Abierto'),
    new select('2', 'En proceso'),
    new select('3', 'Cerrado')
  ]
  titulo = ""
  numero = ""
  descripcion = ""

  /* -------------------------------- MÉTODOS ------------------------------- */
  constructor(
    private _builder: FormBuilder,
    private tareaService: ArrayTareasService,
    private accion: TareaService,
    private route: Router,
  ) {
    //REQUERIMIENTOS DEL FORMULARIO
    this.tareaForm = this._builder.group({
      titulo: ['', Validators.required],
      select: [null, Validators.required],
      descripcion: ['', Validators.required]
    })
  }
  ngOnInit(): void { }


  onSubmit(): void {

    this.accion = new TareaService();

    //SE CAPTURAN LOS DATOS DEL FORMULARIO
    this.titulo = this.tareaForm.value.titulo;
    this.numero = this.tareaForm.value.select.Id;
    this.descripcion = this.tareaForm.value.descripcion;

    //SE CREA LA NUEVA TAREA
    this.accion.setEstado(this.numero);
    this.accion.setTitulo(this.titulo);
    this.accion.setDescripcion(this.descripcion);

    //SE AÑADE AL ARRAY
    this.tareaService.addTareas(this.accion).subscribe(datos => {
      console.log(datos);
    });

    this.route.navigate(['']);
  }

}
/* -------------------------- CLASE PARA EL SELECT -------------------------- */
export class select {
  constructor(public Id: string, public opcione: string) {
  }
}

