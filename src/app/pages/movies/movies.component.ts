import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie.service';
import { MatDialog } from '@angular/material';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import shortid from 'shortid';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  constructor(private movieService: MovieService, public dialog: MatDialog) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.filteredMovies = this.movies;
  }

  onDelete(event: Movie): void {
    this.movieService.deleteMovie(event);
    this.filteredMovies = this.filteredMovies.filter((movie) => movie.id !== event.id);
    this.movies = this.movieService.getMovies();
  }

  onFilterChange(event: string) {
    this.filteredMovies = this.movies.filter((movie) => movie.name.toLowerCase().includes(event.toLowerCase()))
  }

  openDialog(): void {
    let movie: Movie = {
      id: '',
      description: '',
      image: '',
      name: ''
    };

    const dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '700px',
      data: movie
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The movie dialog was closed');
      if (result !== undefined) {
        for (const field of Object.keys(result)) {
          movie[field] = result[field];
        }
        movie.id = shortid.generate();
        this.movieService.addMovie(movie);
        this.movies = this.movieService.getMovies();
      }
    });
  }
}
