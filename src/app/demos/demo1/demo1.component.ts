import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  movieWatchlist: string[] = [
    'Terminator 2',
    'District 9',
    'Get out'
  ];

  constructor() { }

  ngOnInit() {
  }

}
