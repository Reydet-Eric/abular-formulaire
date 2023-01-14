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
    NextStepComponent
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
