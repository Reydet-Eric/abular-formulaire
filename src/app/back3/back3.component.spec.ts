import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Back3Component } from './back3.component';

describe('Back3Component', () => {
  let component: Back3Component;
  let fixture: ComponentFixture<Back3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Back3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Back3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
