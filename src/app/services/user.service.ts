import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Movie } from '../interfaces/movie';
import { Router } from '@angular/router';
import USERS from '../mocks/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  redirectUrl: string;

  constructor(public router: Router) {
    if (this.isLoggedIn) {
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      localStorage.setItem('user', null);
    }
  }

  signIn(name: string, password: string) {
    if (this.isLoggedIn) {
      const redirect = this.redirectUrl ? this.router.parseUrl(this.redirectUrl) : '/home';
      this.router.navigateByUrl(redirect);
    } else {
      this.user = USERS.find(user => user.name === name && user.password === password);
      if (this.user) {
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/']);
      }
    }
  }

  SignOut() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

  addFav(movieToAdd: Movie): void {
    this.user.fav = [...this.user.fav, movieToAdd]
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  removeFav(movieToRemove: Movie): void {
    this.user.fav = this.user.fav.filter(movie => movie.id !== movieToRemove.id)
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  isFav(favMovie: Movie): boolean {
    return this.user.fav.find(movie => movie.id === favMovie.id) !== undefined
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
