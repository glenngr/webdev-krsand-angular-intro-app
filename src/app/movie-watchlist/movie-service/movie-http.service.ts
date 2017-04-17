import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from '../../core/rxjs';
import { Movie } from '../movie.model';

@Injectable()
export class MovieHttpService {
    private movieWatchlistApiResource = '/api/moviewatchlist';

    constructor(private http: Http) { }

    getMovieWatchlist(): Observable<Movie[]> {
        return this.http
            .get(this.movieWatchlistApiResource)
            .map(response => response.json().data as Movie[]);
    }

    addMovieToWatchlist(movie: Movie): Observable<string> {
        return this.http
            .post(this.movieWatchlistApiResource, JSON.stringify(movie))
            .map(res => res.json());
    }
}
