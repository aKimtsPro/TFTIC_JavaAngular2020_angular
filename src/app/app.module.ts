import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { BasketModule } from './basket/basket.module';
import { RecapComponent } from './components/recap/recap.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonCardComponent,
    RecapComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BasketModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
