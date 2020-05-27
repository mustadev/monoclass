import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurSignupComponent } from './formateur-signup.component';

describe('FormateurSignupComponent', () => {
  let component: FormateurSignupComponent;
  let fixture: ComponentFixture<FormateurSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
