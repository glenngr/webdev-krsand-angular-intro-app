import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  desktopClient = true;

  onButtonClick() {
    alert('You clicked me');
  }

  // onButtonClick() {
  //   this.title = this.title + '!';
  // }
}
