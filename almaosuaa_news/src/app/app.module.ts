import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { StartComponent } from './components/start/start/start.component';
import { PolotechaComponent } from './components/polotecha/polotecha/polotecha.component';
import { AuconomyComponent } from './components/auconomy/auconomy/auconomy.component';
import { ChokesComponent } from './components/chokes/chokes/chokes.component';
import { SportsComponent } from './components/sports/sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    PolotechaComponent,
    AuconomyComponent,
    ChokesComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
