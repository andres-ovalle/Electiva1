import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { Componente4Component } from './components/componente4/componente4.component';
import { Componente5Component } from './components/componente5/componente5.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  {path:"", redirectTo:"/componente3", pathMatch: 'full'},
  {path: "componente", component: Componente1Component},
  {path: "formulario", component: FormularioComponent},
  {path: "registro-usuario", component: RegistroUsuarioComponent},
  {path: "servicios", component: ServiciosComponent},
  {path: "componente3", component: Componente3Component, 
  children:[
    {path:"hijo1", component: Componente4Component},
    {path:"hijo2", component: Componente5Component}
  ]
},
  {path: "**", component: Componente2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
