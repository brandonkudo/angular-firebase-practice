import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
  providers: [MovieService]
})
export class MarketplaceComponent implements OnInit {
  movies: FirebaseListObservable<any[]>;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }


  goToDetailPage(clickedMovie: Movie) {
    // this.router.navigate(['movies', clickedMovie.id]);
  };
}
