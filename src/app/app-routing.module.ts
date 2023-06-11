import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  {
    path: '', component: MainComponent,
  },
  {
    path: 'map', component: MapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
