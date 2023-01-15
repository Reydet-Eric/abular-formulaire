import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Next4Component } from './next4.component';

describe('Next4Component', () => {
  let component: Next4Component;
  let fixture: ComponentFixture<Next4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Next4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Next4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
