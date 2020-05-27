import { TestBed } from '@angular/core/testing';

import { ParticipantGuard } from './participant.guard';

describe('ParticipantGuard', () => {
  let guard: ParticipantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ParticipantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
