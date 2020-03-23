import { Movie } from './movie';

export interface User {
  name: string;
  password: string;
  fav: Movie[];
}
