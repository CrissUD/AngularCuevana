import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from '../models/movie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  urlRoot: string = 'https://cuevanaclon.firebaseio.com/'; 

  constructor(private http: HttpClient) { }

  getMoviesPremier():Observable<movie[]>{
    // return this.http.get<movie[]>("assets/data/moviesPremier.json");
    return this.http.get<movie[]>(`${this.urlRoot}moviesPremier.json`).pipe(map(this.getTrend));
  }

  getMoviesOutstanding():Observable<movie[]>{
    // return this.http.get<movie[]>("assets/data/moviesOutstanding.json");
    return this.http.get<movie[]>(`${this.urlRoot}moviesOutstanding.json`).pipe(map(this.getTrend));
  }

  getSeries():Observable<movie[]>{
    // return this.http.get<movie[]>("assets/data/series.json");
    return this.http.get<movie[]>(`${this.urlRoot}series.json`).pipe(map(this.getTrend));
  }

  private getTrend(movieObject: object): movie[]{
    const movies: movie[] = [];
    if(movies === null)
      return null;
    else
      Object.keys(movieObject).forEach(key =>{
        const movie: movie = movieObject[key];
        movie.id_movie = key;
        movies.push(movie);
      });
      return movies;
  }
}
