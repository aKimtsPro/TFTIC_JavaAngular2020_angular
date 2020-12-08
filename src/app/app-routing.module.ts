import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { RecapComponent } from './components/recap/recap.component';

const routes: Routes = [
  {path:'recap', component: RecapComponent},
  {path:'correction', component: BasketComponent},
  {path:'forms', component: FormDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
