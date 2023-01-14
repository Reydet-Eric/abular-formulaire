import { Component } from '@angular/core';
import { User } from '../variables/user';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  user: User={
    page:1,
      }
}
