import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NumeroPageComponent } from './numero-page/numero-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { FinishingComponent } from './finishing/finishing.component';
import { Etape1Component } from './etape1/etape1.component';
import { NextStepComponent } from './next-step/next-step.component';
import { Etape2Component } from './etape2/etape2.component';
import { Etape3Component } from './etape3/etape3.component';
import { Etape4Component } from './etape4/etape4.component';
import { Next2Component } from './next2/next2.component';
import { Next3Component } from './next3/next3.component';
import { Next4Component } from './next4/next4.component';
import { Back1Component } from './back1/back1.component';
import { Back2Component } from './back2/back2.component';
import { Back3Component } from './back3/back3.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NumeroPageComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    FinishingComponent,
    Etape1Component,
    NextStepComponent,
    Etape2Component,
    Etape3Component,
    Etape4Component,
    Next2Component,
    Next3Component,
    Next4Component,
    Back1Component,
    Back2Component,
    Back3Component,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
