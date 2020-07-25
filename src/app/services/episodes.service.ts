import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movie } from '../models/movie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  urlRoot: string = 'https://cuevanaclon.firebaseio.com/'; 

  constructor(private http: HttpClient) { }

  getEpisodes(){
    // return this.http.get("assets/data/episodes.json");
    return this.http.get(`${this.urlRoot}episodes.json`).pipe(
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
