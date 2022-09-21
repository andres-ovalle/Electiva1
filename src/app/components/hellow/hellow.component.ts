import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-hellow',
  templateUrl: './hellow.component.html',
  styleUrls: ['./hellow.component.scss']
})
export class HellowComponent implements OnInit {

  public usuarioSeleccionado: Usuario 
    = new Usuario("", "", 0, false, "","")

  public hola:string = "Hola a todos!"
  public numero:number = 2
  public lista:Usuario[] 
  = [
    new Usuario("12346","Jhon", 25, true, "6045678", "mi casa"),
    new Usuario("12347","Camila", 36, true, "6045678", "calle 12"),
    new Usuario("16348","Pancho", 50, false, "6045678", "calle 10")
]

  usuario:Usuario = new Usuario("12346","Jhon", 25, true, "6045678", "mi casa");
   

  constructor() { }

  ngOnInit(): void {

    console.log(this.lista)
  }

  asignar(u:Usuario){
    this.usuarioSeleccionado = u
  }

}
