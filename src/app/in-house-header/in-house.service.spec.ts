import { TestBed } from '@angular/core/testing';

import { InHouseService } from './in-house.service';

describe('InHouseService', () => {
  let service: InHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
