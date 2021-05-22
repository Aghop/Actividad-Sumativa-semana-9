/* --------------------------------- IMPORTS -------------------------------- */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { anadirTareaComponent } from './anadirTarea/anadirTarea.component';
import { listadoTareasComponent } from './listadoTareas/listadoTareascomponent';
import { ModificarTareaComponent } from './modificarTarea/modificarTarea.component';
import { ArrayTareasService } from './serv/arrayTareas.service';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    anadirTareaComponent,
    listadoTareasComponent,
    ModificarTareaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ArrayTareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
