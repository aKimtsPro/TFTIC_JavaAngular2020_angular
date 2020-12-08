import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Basketteur } from 'src/app/models/Basketteur.model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  nom: string;
  prenom: string;
  age: number;
  taille: number;

  @Output()
  addPlayer = new EventEmitter<Basketteur>();

  constructor() { }

  ngOnInit(): void {
  }

  isValid(basketteur: Basketteur){

    if( basketteur == null || basketteur == undefined )
      return false;

    if( basketteur.nom == undefined || basketteur.prenom == undefined )
      return false;

    return basketteur.nom.length >= 4 
        && basketteur.prenom.length >= 4
        && basketteur.age >= 18 && basketteur.age <= 45
        && basketteur.taille > 165;
  }

  onClick(){
    let player = new Basketteur(this.nom,this.prenom,this.age,this.taille);
    if( this.isValid(player) ){
      this.addPlayer.emit(player);
    }
  }

}
