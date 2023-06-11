import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLinkActive} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router, public  activatedRoute: ActivatedRoute) {
  }

  protected readonly location = location;

  checkRouter(name: string):boolean{
    console.log(this.location.pathname === name)
    return this.location.pathname === name;
  }
}
