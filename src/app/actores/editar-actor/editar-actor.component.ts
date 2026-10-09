import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActoresService } from '../actores.service';
import { EditarEntidadComponent } from "../../compartidos/componentes/editar-entidad/editar-entidad.component";
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/proveedores/proveedores';

@Component({
    selector: 'app-editar-actor',
    imports: [EditarEntidadComponent],
    templateUrl: './editar-actor.component.html',
    providers: [
        { provide: SERVICIO_CRUD_TOKEN, useClass: ActoresService }
    ]
})
export class EditarActorComponent {
  @Input({transform: numberAttribute})
  id!: number;

  formularioActores = FormularioActoresComponent;

}
