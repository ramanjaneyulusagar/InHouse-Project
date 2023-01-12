import { TestBed } from '@angular/core/testing';

import { InHouseGuard } from './in-house.guard';

describe('InHouseGuard', () => {
  let guard: InHouseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InHouseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
