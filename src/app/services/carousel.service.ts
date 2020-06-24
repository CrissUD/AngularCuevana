import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  getMoviesCarousel():Observable<movie[]>{
    return this.http.get<movie[]>("assets/data/movieCarouselInfo.json");
  }
}
