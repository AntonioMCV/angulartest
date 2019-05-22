import { Injectable } from '@angular/core';
import { isNavigationCancelingError } from '@angular/router/src/shared';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Ignacio',
      especialidad: 'HTML',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde ut, eius commodi cupiditate molestias esse, vero quaerat maiores aliquid neque blanditiis ipsa ab! Beatae labore eaque maiores perspiciatis pariatur?',
    },
    {
      nombre: 'Marta',
      especialidad: 'CSS',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti dicta porro aspernatur eos nostrum repellat officiis quo vel voluptates, expedita autem doloremque sequi? Corporis ducimus quis aut sint consequuntur?',
    }
  ]

  constructor() {
    console.log("funcionando servicio")
  }
  obtenerEquipo() {
    return this.equipo;
  }
  obetnerUno(i) {
    return this.equipo[i];
  }
}
