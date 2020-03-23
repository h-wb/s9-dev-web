import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie:Movie;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.randomMovie();
  }

  randomMovie(): void {
    this.movie = this.movieService.getRandomMovie();
  }

  onDelete(event: Movie): void {
    this.movieService.deleteMovie(event);
    this.randomMovie()
  }
}
