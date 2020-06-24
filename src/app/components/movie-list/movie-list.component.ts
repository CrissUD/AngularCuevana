import { Component, OnInit, Input } from '@angular/core';
import { movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movieList: movie[];
  constructor() { }

  ngOnInit(): void {
  }

}
