import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../models/Person.model';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input()
  person: Person;

  @Input()
  index: number;

  @Output()
  delete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.delete.emit( this.index );
  }

}
