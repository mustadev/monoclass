import { TestBed } from '@angular/core/testing';

import { FormateurGuard } from './formateur.guard';

describe('FormateurGuard', () => {
  let guard: FormateurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormateurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
