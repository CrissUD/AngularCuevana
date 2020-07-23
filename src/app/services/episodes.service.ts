import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  urlRoot: string = 'https://cuevanaclon.firebaseio.com/'; 

  constructor(private http: HttpClient) { }

  getEpisodes(){
    // return this.http.get("assets/data/episodes.json");
    return this.http.get(`${this.urlRoot}episodes.json`);
  }
}
