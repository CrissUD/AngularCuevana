import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/models/movie';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  moviesCarousel: movie[];
  estadoAnterior: number = 0;

  constructor(private carouseService: CarouselService) { }

  ngOnInit(): void {
    this.carouseService.getMoviesCarousel().subscribe(data =>{
        this.moviesCarousel = data;
    })
  }

  moveCarousel(event, i, carousel){
    carousel.style.transform = "translateX(calc(200vw - "+i * 100+"vw))";
    document.getElementById(i).classList.toggle('activate');
    document.getElementById(this.estadoAnterior+"").classList.toggle('activate');
    this.estadoAnterior = i;
  }
}
