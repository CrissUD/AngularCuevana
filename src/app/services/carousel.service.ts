import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movie } from '../models/movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  urlRoot: string = 'https://cuevanaclon.firebaseio.com/'; 

  constructor(private http: HttpClient) { }

  getMoviesCarousel():Observable<movie[]>{
    // return this.http.get<movie[]>("assets/data/movieCarouselInfo.json");
    return this.http.get<movie[]>(`${this.urlRoot}movieCarouselInfo.json`).pipe(
      map((movieObject: object) =>{
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
      })
    );
  }
}
