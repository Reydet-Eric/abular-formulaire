import { Component } from '@angular/core';
import { User } from '../variables/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
user: User= {
  page:2
}

  addPage(){
    this.user.page ++

    console.log(`page: ${this.user.page}`)
  }
}
