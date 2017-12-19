import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MovieService]
})
export class AdminComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  submitForm(name: string, director: string, year: number) {
    var newMovie: Movie = new Movie(name, director, year);
    this.movieService.addMovie(newMovie);
    console.log(newMovie);
  }

}
