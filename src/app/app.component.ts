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
  p_class = 'green';
  input: string = '';
  showP = 5 > 4;
  colorPicked = "#ffffff" ;

  keyValueClasses= {
    'green' : this.showP,
    'underlined' : true
  }

  onClick(){
    console.log(this.colorPicked);
  }

  onMouseOver(){
    console.log("salut");
  }
}
