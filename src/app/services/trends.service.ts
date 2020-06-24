import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  constructor(private http: HttpClient) { }

  getMoviesPremier():Observable<movie[]>{
    return this.http.get<movie[]>("assets/data/moviesPremier.json");
  }

  getMoviesOutstanding():Observable<movie[]>{
    return this.http.get<movie[]>("assets/data/moviesOutstanding.json");
  }

  getSeries():Observable<movie[]>{
    return this.http.get<movie[]>("assets/data/series.json");
  }
}