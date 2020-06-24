import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getMoviesDashboard():Observable<movie[]>{
    return this.http.get<movie[]>("assets/data/moviesDash.json");
  }
}
