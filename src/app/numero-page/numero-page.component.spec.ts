import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroPageComponent } from './numero-page.component';

describe('NumeroPageComponent', () => {
  let component: NumeroPageComponent;
  let fixture: ComponentFixture<NumeroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
