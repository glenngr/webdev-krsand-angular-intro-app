import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../demos/demo1/movie.model';

@Injectable()
export class InMemoryMovieService implements InMemoryDbService {
    createDb() {
        const moviewatchlist = [
            new Movie('Terminator 2', true),
            new Movie('District 9', true),
            new Movie('Get out', false),
        ];
        return { moviewatchlist };
    }

}
