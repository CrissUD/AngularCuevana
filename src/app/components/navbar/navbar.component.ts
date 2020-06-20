import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  genders: any;
  movies: any;
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getGenders().subscribe(data =>{
      this.genders = data;
    });
    this.menuService.getMovies().subscribe(data =>{
      this.movies = data;
    });
  }

  moveMenu(event, gridMenu, logoDiv){
    gridMenu.classList.toggle('activate');
    logoDiv.classList.toggle('activate');
  }
}
