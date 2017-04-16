import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
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
