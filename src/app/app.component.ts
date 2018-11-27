import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*  template: '<h1>Angular App root component</h1>',
  /*아래와 같이 직접 작성 가능
  //  templateUrl: './app.component.html',
  */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing';

  carPart = {
    'id': 1,
    'name': 'Super Tires',
    'description': 'THese tires are the very bet',
    'inStock': 5
  };

// 변수 사용 안하면 회색으로 나옴, webstorm에서 제공하는 기능
  carParts = [
    {
      'id': 1,
      'name': 'Super Tires',
      'description': 'These tires are the very best',
      'price': 4.99,
      'inStock': 5
    },
    {
      'id': 2,
      'name': 'Reinforced Shocks',
      'description': 'Shocks made from kryptonite',
      'price': 9.99,
      'inStock': 4
    },
    {
      'id': 3,
      'name': 'Padded Seats',
      'description': 'Super soft seats for a smooth ride',
      'price': 24.99,
      'inStock': 0
    };
}
