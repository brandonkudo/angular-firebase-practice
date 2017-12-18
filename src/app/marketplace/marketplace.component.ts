import { Component } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent {
  movies: Movie[] = [

  ]
}
