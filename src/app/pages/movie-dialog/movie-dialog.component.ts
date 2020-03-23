import { Component, OnInit, Inject } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {

  movie: Movie;
  profileForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    private fb: FormBuilder
  ) {
    this.movie = data
    console.log(data);
    this.profileForm = this.fb.group({
      name: [this.movie.name, [Validators.required]],
      description: [this.movie.description],
      image: [this.movie.image, [Validators.pattern('https?://.+')]],
    });
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.profileForm.value);
  }

  isUpdate(): boolean {
    return this.movie.name !== '';
  }
}
