import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from '../core/rxjs';

import { Movie } from './movie.model';
import { MovieService } from './movie-service/movie.service';

@Component({
  selector: 'app-movie-watchlist',
  templateUrl: './movie-watchlist.component.html',
  styleUrls: ['./movie-watchlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieWatchlistComponent implements OnInit {
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
