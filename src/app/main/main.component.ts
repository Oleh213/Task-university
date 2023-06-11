import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  protected readonly location = location;
  public sort: boolean = false;
  banks: Array<{name: string, rating: number, router: string}> = [
    {name: 'Віділення ПриватБанк №1', rating: 4.04, router: 'https://goo.gl/maps/xDFxfCB7yyixmiTT7'},
    {name: 'Віділення ПриватБанк №2', rating: 4.04, router: 'https://goo.gl/maps/tJZr59MxY2RUHjMX6'},
    {name: 'Віділення ПриватБанк №3', rating: 4.04, router:'https://goo.gl/maps/JjteNxqbV7D1AdAk7'},
    {name: 'Віділення Ощадбанк №1', rating: 4.39, router:'https://goo.gl/maps/4K2yPY7F3gJb1sBF9'},
    {name: 'Віділення Ощадбанк №2', rating: 4.39, router:'https://goo.gl/maps/c1LbsYjiRy1xZsur5'},
    {name: 'Віділення Таскобанк', rating: 3.31, router:'https://goo.gl/maps/3k6ML1rfKN2y7twW8'},
    {name: 'Віділення Сенс-банк', rating: 2.78, router:'https://goo.gl/maps/ixZf1F5jWeg8u3w86'},
    {name: 'Віділення Кредобанк', rating: 4.15, router: 'https://goo.gl/maps/HnfrcQ54zGQpvVtDA'},
    {name: 'Віділення ПУМБ №1', rating: 3.70, router:'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення ВТБ Банк ', rating: 3.46, router:'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення Укрексімбанк ', rating: 4.39, router:'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення Конкорд', rating: 2.98, router:'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення Кредит Агріколь Банк', rating: 4.16, router:'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення А-Банк', rating: 3.49, router:'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення  Укргазбанк ', rating: 3.51, router:'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення Райффайзен Банк Аваль ', rating: 3.34, router: 'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення ПУМБ №2', rating: 3.70, router: 'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення ОТП Банк ', rating: 4.12, router:'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення Укргазбанк', rating: 3.51, router: 'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
    {name: 'Віділення Південий ', rating: 3.75, router:'https://goo.gl/maps/tJFb2yYWaTLJGziP6'},
  ]
  public sortByRating(){
    if(this.sort){
      this.banks.sort((a,b)=> b.rating - a.rating)
      this.sort = false;
    }
    else {
      this.sort = true;
      this.banks.sort((a,b)=> a.rating - b.rating)
    }
  }


}
