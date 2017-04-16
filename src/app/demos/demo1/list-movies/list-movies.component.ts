import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  @Input() movieWatchlist: Movie[];
  constructor() { }

  ngOnInit() {
  }

  trackByMovietitle(item: Movie) {
    return item.title;
  }

}
