import { Component } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent {
  movies: Movie[] = [
    new Movie("Requiem for a Dream","David Lynch",2000),
    new Movie("Mulholland Drive","David Lynch", 2005),
    new Movie("The Departed","Martin Scorcese",2008)
  ]
}
