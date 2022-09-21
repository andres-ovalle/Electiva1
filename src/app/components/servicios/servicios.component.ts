import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';



@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']

})
export class ServiciosComponent implements OnInit {

  public episodios : any;

  constructor(public _UsuarioService: ServicesService) { }

  ngOnInit(): void {
    this._UsuarioService.getEpisodios()
      .subscribe(
        (data) => {
          this.episodios = data;

          console.log(this.episodios)
        }

      )};

    /*
   .suscribe(
     (data)==> {
       this.episiodios = data
       console.log(data)
     },(error)==>{

       console.log(error)
       }
       
     }
     */

}
