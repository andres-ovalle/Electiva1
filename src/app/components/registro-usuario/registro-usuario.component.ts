import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {

  public titulo = "Registrar Usuario"
  public usuario: Usuario

  constructor() {
    this.usuario = new Usuario("", "", 0, false, "", "")
  }

  ngOnInit(): void {
  }

  registrarUsuario(){
   
    console.log(this.usuario)
    
  }
}
