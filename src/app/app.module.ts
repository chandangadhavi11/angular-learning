import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomComponent } from './random/random.component';
import { MybuttonComponent } from './mybutton/mybutton.component';
import { SecondSectionComponent } from './second-section/second-section.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    MybuttonComponent,
    SecondSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
