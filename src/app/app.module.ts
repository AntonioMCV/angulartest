import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//servicios
import { EquipoService } from './equipo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RutasyserviciosComponent } from './rutasyservicios/rutasyservicios.component';
import { DetalleequipoComponent } from './detalleequipo/detalleequipo.component';

const routes: Routes = [
  { path: 'ngif', component: NgifComponent },
  { path: 'ngclass', component: NgclassComponent },
  { path: 'ngfor', component: NgforComponent },
  { path: 'rutasyservicios', component: RutasyserviciosComponent },
  { path: 'detalleequipo/:id', component: DetalleequipoComponent },
  { path: 'errorpage', component: ErrorpageComponent },
  { path: '', component: InicioComponent, pathMatch: 'full'},
  { path: '**', redirectTo: 'errorpage', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    NgifComponent,
    NgclassComponent,
    NgforComponent,
    InicioComponent,
    ErrorpageComponent,
    RutasyserviciosComponent,
    DetalleequipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
