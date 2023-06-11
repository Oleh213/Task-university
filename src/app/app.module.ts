import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import {RouterLinkActive} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [RouterLinkActive],
  bootstrap: [AppComponent]
})
export class AppModule { }
