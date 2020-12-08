import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Basketteur } from 'src/app/models/Basketteur.model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  basketForm: FormGroup;

  @Output()
  addPlayer = new EventEmitter<Basketteur>();

  constructor(private builder: FormBuilder) {
    this.basketForm = builder.group({
      nom: new FormControl(null, [Validators.minLength(4), Validators.required]),
      prenom: new FormControl(null, [Validators.minLength(4), Validators.required]),
      age: new FormControl(null, [Validators.min(18), Validators.max(45), Validators.required]),
      taille: new FormControl(null, [Validators.min(166), Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.basketForm.valid){
      this.addPlayer.emit(this.basketForm.value);
    }
  }

}
