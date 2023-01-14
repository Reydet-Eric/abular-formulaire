import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  addPage(){
    // this.user.page ++
    console.log('next')
    // console.log(`${this.user.page}`)
  }
}
