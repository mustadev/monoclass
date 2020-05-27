import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurLoginComponent } from './formateur-login.component';

describe('FormateurLoginComponent', () => {
  let component: FormateurLoginComponent;
  let fixture: ComponentFixture<FormateurLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
