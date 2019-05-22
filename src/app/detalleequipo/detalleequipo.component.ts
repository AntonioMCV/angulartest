import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-detalleequipo',
  templateUrl: './detalleequipo.component.html',
  styleUrls: ['./detalleequipo.component.sass']
})
export class DetalleequipoComponent implements OnInit {

  equipo:any[] = [];

  constructor(
    private ruta:ActivatedRoute,
    private _servicio: EquipoService
  ) {
    this.ruta.params.subscribe(params=> {
      console.log(params['id']);
      this.equipo = this._servicio.obetnerUno(params['id']);
    });
  }

  ngOnInit() {
  }

}
