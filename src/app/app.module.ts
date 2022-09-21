import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellowComponent } from './components/hellow/hellow.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { Componente4Component } from './components/componente4/componente4.component';
import { Componente5Component } from './components/componente5/componente5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MatInputModule } from '@angular/material/input';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ServiciosComponent } from './components/servicios/servicios.component';




@NgModule({
  declarations: [
    AppComponent,
    HellowComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component,
    FormularioComponent,
    RegistroUsuarioComponent,
    ServiciosComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
