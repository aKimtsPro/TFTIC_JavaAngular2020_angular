import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Basketteur } from '../models/Basketteur.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  team: Basketteur[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onAddPlayer(player: Basketteur){
    this.team.push(player);
  }

  onDelete(index: number){
    this.team.splice(index, 1);
  }

}
