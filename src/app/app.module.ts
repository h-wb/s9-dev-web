import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { FavComponent } from './pages/fav/fav.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieDialogComponent } from './pages/movie-dialog/movie-dialog.component';
import { FiltreComponent } from './pages/filtre/filtre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    ToolbarComponent,
    FavComponent,
    LoginComponent,
    MovieDialogComponent,
    FiltreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [MovieDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
