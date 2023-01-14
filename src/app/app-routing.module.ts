import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Etape1Component } from './etape1/etape1.component';
import { Etape2Component } from './etape2/etape2.component';


const routes: Routes = [
{path: 'etape1', component: Etape1Component},
{path: 'etape2', component: Etape2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
