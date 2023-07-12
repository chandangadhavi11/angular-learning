import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MybuttonComponent } from './mybutton/mybutton.component';
import { RandomComponent } from './random/random.component';
import { SecondSectionComponent } from './second-section/second-section.component';

const routes: Routes = [
  { path: 'mybutton', component: MybuttonComponent },
  { path: 'random', component: RandomComponent },
  { path: 'second', component: SecondSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

}
