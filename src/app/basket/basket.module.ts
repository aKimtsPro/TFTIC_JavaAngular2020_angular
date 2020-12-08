import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { FormsModule } from '@angular/forms';
import { PlayerInfoComponent } from './components/player-info/player-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BasketComponent, AddPlayerComponent, PlayerInfoComponent]
})
export class BasketModule { }
