import { Component } from '@angular/core';
import { myUser } from '../variables/myUser';
import { User } from '../variables/user';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})

export class PersonalInfoComponent {

myUser : User = {
  page: 1};

  
}

