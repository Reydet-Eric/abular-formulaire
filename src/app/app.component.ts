import { Component } from '@angular/core';
import { User} from './variables/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulaire';
  user: User={
    page:2
  }
  etape:number =1

  constructor () {};


}
