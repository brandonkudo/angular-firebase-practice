import { Component } from '@angular/core';
import { Movie } from '../movie.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent {
  constructor(private router: Router) {}
  movies: Movie[] = [
    new Movie("Requiem for a Dream","David Lynch",2000,1),
    new Movie("Mulholland Drive","David Lynch", 2005,2),
    new Movie("The Departed","Martin Scorcese",2008,3)
  ]

  goToDetailPage(clickedMovie: Movie) {
    this.router.navigate(['movies', clickedMovie.id]);
  };
}
