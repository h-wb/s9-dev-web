import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { UserService } from '../../services/user.service';
import { MovieService } from '../../services/movie.service';
import { MatDialog } from '@angular/material';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieDelete: EventEmitter<Movie>;

  constructor(private userService: UserService, public dialog: MatDialog, private movieService: MovieService) {
    this.movieDelete = new EventEmitter<Movie>();
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '700px',
      data: this.movie
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The movie dialog was closed');
      if (result !== undefined) {
        for (const field of Object.keys(result)) {
          this.movie[field] = result[field];
        }
        this.movieService.editMovie(this.movie);
      }
    });
  }

  onDelete(movie: Movie): void {
    this.movieDelete.emit(movie);
  }

  isFav(): boolean {
    return this.userService.isFav(this.movie)
  }

  addFav(): void {
    this.userService.addFav(this.movie)
  }

  removeFav(): void { 
    this.userService.removeFav(this.movie)
  }
}
