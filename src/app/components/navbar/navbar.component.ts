import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  genders: any;
  movies: any;
  estadoLoging = false;
  estadoSignUp= false;

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

  changeEstadoLogin(boolean){
    this.estadoLoging = boolean;
  }

  changeEstadoSignUp(boolean){
    this.estadoSignUp = boolean;
  }
}
