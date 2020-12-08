import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { BasketModule } from './basket/basket.module';
import { RecapComponent } from './components/recap/recap.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { DemoServiceHttpComponent } from './components/demo-service-http/demo-service-http.component'
import { ApiConsumeService } from './services/api-consume.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonCardComponent,
    RecapComponent,
    NavComponent,
    HeaderComponent,
    FormDemoComponent,
    DemoServiceHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BasketModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
