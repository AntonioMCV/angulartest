import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.sass']
})
export class NgforComponent implements OnInit {
  animales: Array<any> = [
    { tipo: 'Perro', nombre: 'Lisa', edad: '10' },
    { tipo: 'Gato', nombre: 'Rufus', edad: '13' },
    { tipo: 'Pato', nombre: 'Pedro', edad: '20' }
  ]
  constructor() { }

  ngOnInit() {
  }
}
