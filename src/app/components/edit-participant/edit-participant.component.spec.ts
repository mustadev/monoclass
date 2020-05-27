import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParticipantComponent } from './edit-participant.component';

describe('EditParticipantComponent', () => {
  let component: EditParticipantComponent;
  let fixture: ComponentFixture<EditParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
