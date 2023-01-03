import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuconomyComponent } from './components/auconomy/auconomy/auconomy.component';
import { ChokesComponent } from './components/chokes/chokes/chokes.component';
import { HomeComponent } from './components/home/home/home.component';
import { PolotechaComponent } from './components/polotecha/polotecha/polotecha.component';
import { SportsComponent } from './components/sports/sports/sports.component';
import { StartComponent } from './components/start/start/start.component';

const routes: Routes = [

  {path:"polotecha",component:PolotechaComponent},
  {path:"auconomy",component:AuconomyComponent},
  {path:"chokes",component:ChokesComponent},
  {path:"sports",component:SportsComponent},

  {path:"**",component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
