import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMovieComponent implements OnInit {
  @Output() movieAdded = new EventEmitter<string>();
  public movieToAdd: string;

  constructor() { }

  ngOnInit() {
  }

  addMovie() {
    this.movieAdded.emit(this.movieToAdd);
    this.movieToAdd = '';
  }
}
