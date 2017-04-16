import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Demo1Component } from './demo1/demo1.component';
import { AddMovieComponent } from './demo1/add-movie/add-movie.component';
import { MovieService, MovieHttpService } from './demo1/movie-service/';
import { HighlightDirective } from './demo1/highlight.directive';
import { ListMoviesComponent } from './demo1/list-movies/list-movies.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [Demo1Component],
    declarations: [Demo1Component, AddMovieComponent, HighlightDirective, ListMoviesComponent],
    providers: [MovieService, MovieHttpService],
})
export class DemoModule { }

