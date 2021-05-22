/* --------------------------------- IMPORTS -------------------------------- */

import { NgModule } from '@angular/core';
import { anadirTareaComponent } from './anadirTarea/anadirTarea.component';
import { listadoTareasComponent } from './listadoTareas/listadoTareascomponent';
import { ModificarTareaComponent } from './modificarTarea/modificarTarea.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: listadoTareasComponent },
  { path: 'anadir', component: anadirTareaComponent },
  { path: 'modificar/:id', component: ModificarTareaComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
