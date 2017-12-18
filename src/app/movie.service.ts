import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies() {
    return MOVIES;
  }

}
