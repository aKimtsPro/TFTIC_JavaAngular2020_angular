import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input()
  input: string;

  personList : Array<Person> = [
    {
      nom: "luc",
      age: 50
    },
    {
      nom: "marie",
      age: 15
    },
    {
      nom: "dominique",
      age: 5 
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(index){
    this.personList.splice(index, 1);
  }

}
