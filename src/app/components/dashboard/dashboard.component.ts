import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/models/movie';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  moviesDashboard: movie[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getMoviesDashboard().subscribe(data =>{
      this.moviesDashboard = data;
    })
  }
}
