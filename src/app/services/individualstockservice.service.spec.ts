import { TestBed } from '@angular/core/testing';

import { IndividualstockserviceService } from './individualstockservice.service';

describe('IndividualstockserviceService', () => {
  let service: IndividualstockserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualstockserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
