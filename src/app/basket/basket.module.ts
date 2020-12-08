import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerInfoComponent } from './components/player-info/player-info.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [BasketComponent, AddPlayerComponent, PlayerInfoComponent],
  bootstrap: [BasketComponent]
})
export class BasketModule { }
