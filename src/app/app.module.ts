import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import {RouterLinkActive} from "@angular/router";
import { LoaderComponent } from './loader/loader/loader.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoadingInterceptor} from "./loader/loader";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    RouterLinkActive,
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
