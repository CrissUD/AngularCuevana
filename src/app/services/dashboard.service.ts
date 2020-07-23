import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  urlRoot: string = 'https://cuevanaclon.firebaseio.com/'; 

  constructor(private http: HttpClient) { }

  getMoviesDashboard():Observable<movie[]>{
    // return this.http.get<movie[]>("assets/data/moviesDash.json");
    return this.http.get<movie[]>(`${this.urlRoot}moviesDash.json`);
  }
}
