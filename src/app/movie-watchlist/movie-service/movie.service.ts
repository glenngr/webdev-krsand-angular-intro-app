import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from '../../core/rxjs';
import { Movie } from '../movie.model';
import { MovieHttpService } from './movie-http.service';

@Injectable()
export class MovieService implements OnInit {
    private _movieWatchlist$: BehaviorSubject<Movie[]>;
    public movieWatchlist$: Observable<Movie[]>;

    constructor(private movieHttpService: MovieHttpService) {
        const initialState: Movie[] = [];
        this._movieWatchlist$ = new BehaviorSubject<Movie[]>(initialState);
        this.emitNewestMoviesFromHttpService();
        this.movieWatchlist$ = this._movieWatchlist$.asObservable();
    }

    ngOnInit() {

    }

    addMovie(name: string) {
        const newMovie = new Movie(name, false);
        this.movieHttpService.addMovieToWatchlist(newMovie)
            .take(1)
            .subscribe((res) => {
                console.log('addMovie: response from movie http service:', res);
                this.emitNewestMoviesFromHttpService();
            });
    }

    private emitNewestMoviesFromHttpService() {
        this.movieHttpService
            .getMovieWatchlist()
            .take(1)
            .do(data => console.log('received data from movie http service:', data))
            .subscribe(data => this._movieWatchlist$.next(data));
    }
}
