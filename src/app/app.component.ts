import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: "<div><h3 class='display-2'> Hello world </h3></div>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recapAngular';
  
  input: string = '';

  onInputChanged(value: string){
    this.input = value;
  }

}
