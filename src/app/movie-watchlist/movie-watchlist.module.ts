import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieWatchlistComponent } from './movie-watchlist.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieService, MovieHttpService } from './movie-service/';
import { HighlightDirective } from './directives/highlight.directive';
import { ListMoviesComponent } from './list-movies/list-movies.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [MovieWatchlistComponent],
    declarations: [MovieWatchlistComponent, AddMovieComponent, HighlightDirective, ListMoviesComponent],
    providers: [MovieService, MovieHttpService],
})
export class MovieWatchlistModule { }

