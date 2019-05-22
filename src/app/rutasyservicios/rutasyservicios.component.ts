import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-rutasyservicios',
  templateUrl: './rutasyservicios.component.html',
  styleUrls: ['./rutasyservicios.component.sass']
})
export class RutasyserviciosComponent implements OnInit {

  equipo:any[] = [];

  constructor(private _servicio:EquipoService) {
    this.equipo= _servicio.obtenerEquipo();
  }

  ngOnInit() {
  }

}
