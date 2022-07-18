import { TestBed } from '@angular/core/testing';

import { GymDataService } from './gym-data.service';

describe('GymDataService', () => {
  let service: GymDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
