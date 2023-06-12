import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../loader/loader.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  constructor(private loaderService: LoaderService) {
  }
  ngOnInit(): void {
    this.loaderService.setLoading(true);
    setTimeout(() => {
      this.loaderService.setLoading(false);
    }, 3000);
  }
}
