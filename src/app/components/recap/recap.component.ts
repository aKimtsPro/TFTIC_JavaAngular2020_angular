import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  @Output()
  inputChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  p_class = 'green';
  input: string = '';
  showP = true;
  colorPicked = "#ffffff" ;


  onClick(){
    this.showP =!this.showP;
  }

  onMouseOver(){
    console.log("salut");
  }

  onChange(){
    this.inputChanged.emit(this.input);
  }
}
