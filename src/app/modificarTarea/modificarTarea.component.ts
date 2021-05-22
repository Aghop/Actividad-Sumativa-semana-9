/* --------------------------------- IMPORTS -------------------------------- */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from 'src/app/serv/tarea.service';
import { ArrayTareasService } from 'src/app/serv/arrayTareas.service';

@Component({
  selector: 'app-modificarTarea',
  templateUrl: './modificarTarea.component.html',
  styleUrls: ['./modificarTarea.component.scss']
})

/* ---------------------------------- CLASE --------------------------------- */
export class ModificarTareaComponent implements OnInit {
  tareaForm: FormGroup;

  opciones = [

    new select('1', 'Abierto'),
    new select('2', 'En proceso'),
    new select('3', 'Terminado')
  ]

  titulo = ""
  numero = ""
  descripcion = ""
  id = 0
  tarea = new TareaService;

  /* --------------------------------- MÉTODOS -------------------------------- */
  constructor(

    private _builder: FormBuilder,
    private tareaService: ArrayTareasService,
    private accion: TareaService,
    private route: Router,
    private route1: ActivatedRoute

  ) {
    //REQUERIMIENTOS DEL FORMULARIO
    this.tareaForm = this._builder.group({
      titulo: ['', Validators.required],
      select: [null, Validators.required],
      descripcion: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.route1.params.subscribe(params => {
      this.id = params['id'];
    });

    //SE BUSCA LA TAREA A LA QUE LE PERTENECE EL ID
    for (let i = 0; i < this.tareaService.getTareas().length; i++) {
      if ((this.tareaService.getTareas())[i].id == this.id) {
        this.tarea = this.tareaService.getTareas()[i];
        break;
      }
    }
  }

  onSubmit(): void {
    this.accion = new TareaService();

    //SE CAPTURAN LOS DATOS DEL FORMULARIO
    this.titulo = this.tareaForm.value.titulo;
    this.numero = this.tareaForm.value.select.Id;
    this.descripcion = this.tareaForm.value.descripcion;

    //SE CREA LA NUEVA TAREA
    this.accion.setEstado(this.numero);
    this.accion.changeTitulo(this.titulo);
    this.accion.setDescripcion(this.descripcion);

    this.tareaService.modificarTarea(this.accion, this.tarea).subscribe(datos => {
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