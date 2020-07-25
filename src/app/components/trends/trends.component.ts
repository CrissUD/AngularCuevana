import { Component, OnInit } from '@angular/core';
import { TrendsService } from 'src/app/services/trends.service';
import { movie } from 'src/app/models/movie';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  moviesPremier: movie[];
  moviesOutstanding: movie[];
  series: movie[];

  constructor(private trendsService: TrendsService) { }

  ngOnInit(): void {
    this.trendsService.getMoviesPremier().subscribe(data =>{
      this.moviesPremier = data;
    })
    this.trendsService.getMoviesOutstanding().subscribe(data =>{
      this.moviesOutstanding = data;
    })
    this.trendsService.getSeries().subscribe(data =>{
      this.series = data;
    })
  }

}
