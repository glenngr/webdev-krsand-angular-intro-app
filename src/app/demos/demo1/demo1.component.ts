import { Component, OnInit } from '@angular/core';

import { Movie } from './movie.model';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  movieWatchlist: Movie[] = [
    new Movie('Terminator 2', true),
    new Movie('District 9', true),
    new Movie('Get out', false),
  ];

  constructor() { }

  ngOnInit() {
  }

}
