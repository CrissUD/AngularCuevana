import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getGenders(){
    return this.http.get("assets/data/genders.json");
  }

  getMovies(){
    return this.http.get("assets/data/movies.json");
  }
}
