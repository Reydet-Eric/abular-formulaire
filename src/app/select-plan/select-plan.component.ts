import { Component } from '@angular/core';
import { User } from '../variables/user';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css']
})
export class SelectPlanComponent {
  user: User={
    page:1,
      }
}
