import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public url: string;

  constructor(private _http: HttpClient) {
    
    this.url = "https://rickandmortyapi.com/api/episode"
  }

  //cosumir servicio de rick and morty episodio
  
  getEpisodios() {

    return this._http.get(this.url);

  }


}
