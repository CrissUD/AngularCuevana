import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlRoot: string = 'https://cuevanaclon.firebaseio.com/'; 

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.urlRoot}usuarios.json`);
  }

  getOneUser(id: string){
    return this.http.get(`${this.urlRoot}usuarios${id}.json`);
  }
}
