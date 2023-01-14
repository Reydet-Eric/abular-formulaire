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
    page:1,
    name: 'eric',
    email:'',
    phone: 0
  }
}
