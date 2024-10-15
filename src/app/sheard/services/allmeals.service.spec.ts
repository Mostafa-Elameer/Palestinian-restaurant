import { TestBed } from '@angular/core/testing';

import { AllmealsService } from './allmeals.service';

describe('AllmealsService', () => {
  let service: AllmealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllmealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
