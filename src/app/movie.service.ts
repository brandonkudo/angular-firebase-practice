import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies() {
    return MOVIES;
  }

  getMovieById(movieId: number) {
    for (let i = 0; i <= MOVIES.length - 1; i++) {
      if (MOVIES[i].id === movieId) {
        return MOVIES[i];
      }
    }
  }

}
