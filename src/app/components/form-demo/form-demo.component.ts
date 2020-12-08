import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/models/Person.model';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  personList: Person[] = [
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
  ];

  personForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.personForm = builder.group({
      nom: new FormControl('', [Validators.minLength(4), Validators.maxLength(20), Validators.required]),
      age: new FormControl(50, [Validators.min(0), Validators.required])
    });
    this.seeForm();
  }

  ngOnInit(): void {
  }

  seeForm(){
    console.log(this.personForm);
  }

  onSubmit(){
    if(this.personForm.valid)
      this.personList.push( this.personForm.value );
  }

}
