import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../core/rxjs';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
    private initialState = [
        new Movie('Terminator 2', true),
        new Movie('District 9', true),
        new Movie('Get out', false),
    ];

    private _movieWatchlist$: BehaviorSubject<Movie[]>;
    public movieWatchlist$: Observable<Movie[]>;

    constructor() {
        this._movieWatchlist$ = new BehaviorSubject<Movie[]>(this.initialState);
        this.movieWatchlist$ = this._movieWatchlist$.asObservable();
    }

    addMovie(name: string) {
        const newMovie = new Movie(name, false);
        this.initialState.push(newMovie);
        this._movieWatchlist$.next(this.initialState);
    }
}
