import { Component } from '@angular/core';
import { User } from '../variables/user';

@Component({
  selector: 'app-etape1',
  templateUrl: './etape1.component.html',
  styleUrls: ['./etape1.component.css']
})
export class Etape1Component {
  user: User={
    page:1,


    okPersonalInfo: false
      }

      if (){
        this.user.okPersonalInfo = true;
      }
}
