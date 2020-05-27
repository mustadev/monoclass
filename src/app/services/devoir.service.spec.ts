import { TestBed } from '@angular/core/testing';

import { DevoirService } from './devoir.service';

describe('DevoirService', () => {
  let service: DevoirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevoirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
