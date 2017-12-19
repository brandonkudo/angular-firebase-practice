import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
  movieId: number = null;
  movieToDisplay: Movie;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.movieId = parseInt(urlParameters['id']);
    });
  // this.movieToDisplay = this.movieService.getMovieById(this.movieId);
  }

}
