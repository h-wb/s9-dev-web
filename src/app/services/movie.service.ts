import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import MOVIES from '../mocks/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [];

  constructor() {
    this.movies = MOVIES
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getRandomMovie(): Movie {
    const rand = (Math.floor(Math.random() * (this.movies.length)));

    return this.movies[rand];
  }

  addMovie(movie: Movie): void {
    this.movies = [...this.movies, movie];
  }

  deleteMovie(event: Movie): void {
    this.movies = this.movies.filter((movie) => movie.id !== event.id);
  }

  editMovie(event: Movie): void {
    const index = this.movies.findIndex((movie) => movie.id === event.id);

    this.movies[index] = event;
  }
}
