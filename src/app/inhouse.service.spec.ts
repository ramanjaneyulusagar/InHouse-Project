import { TestBed } from '@angular/core/testing';

import { InhouseService } from './inhouse.service';

describe('InhouseService', () => {
  let service: InhouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InhouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
