import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
// import { MOVIES } from './mock-movies';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class MovieService {
  movies: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.movies = database.list('movies');
  }

  getMovies() {
    return this.movies;
  }

  addMovie(newMovie: Movie) {
    this.movies.push(newMovie);
  }

  getMovieById(movieId: number) {
    // for (let i = 0; i <= MOVIES.length - 1; i++) {
    //   if (MOVIES[i].id === movieId) {
    //     return MOVIES[i];
    //   }
    // }
  }

}
