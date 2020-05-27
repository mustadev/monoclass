import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevoirComponent } from './edit-devoir.component';

describe('EditDevoirComponent', () => {
  let component: EditDevoirComponent;
  let fixture: ComponentFixture<EditDevoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDevoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
