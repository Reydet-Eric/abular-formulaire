import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Etape1Component } from './etape1/etape1.component';
import { Etape2Component } from './etape2/etape2.component';
import { Etape3Component } from './etape3/etape3.component';
import { Etape4Component } from './etape4/etape4.component';
import { Back1Component } from './back1/back1.component';
import { Back2Component } from './back2/back2.component';
import { Back3Component } from './back3/back3.component';


const routes: Routes = [
{path: 'etape1', component: Etape1Component},
{path: 'etape2', component: Etape2Component},
{path: 'etape3', component: Etape3Component},
{path: 'etape4', component: Etape4Component},
{path: 'back1', component: Back1Component},
{path: 'back2', component: Back2Component},
{path: 'back3', component: Back3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
