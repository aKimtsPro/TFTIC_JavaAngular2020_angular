import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { DemoServiceHttpComponent } from './components/demo-service-http/demo-service-http.component';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { RecapComponent } from './components/recap/recap.component';

const routes: Routes = [
  {path:'recap', component: RecapComponent},
  {path:'correction', component: BasketComponent},
  {path:'forms', component: FormDemoComponent},
  {path:'service', component: DemoServiceHttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
