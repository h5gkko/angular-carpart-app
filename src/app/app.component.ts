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


}
