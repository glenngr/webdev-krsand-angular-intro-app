import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from '../../core/rxjs';

import { Movie } from './movie.model';
import { MovieService } from './movie-service/movie.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Demo1Component implements OnInit {
  movieWatchlist$: Observable<Movie[]>;

  constructor(private movieService: MovieService) {
    this.movieWatchlist$ = this.movieService.movieWatchlist$;
  }

  ngOnInit() {
  }

  addMovie(movieName) {
    this.movieService.addMovie(movieName);
  }
}
