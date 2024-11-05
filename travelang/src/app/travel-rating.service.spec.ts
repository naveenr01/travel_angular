import { TestBed } from '@angular/core/testing';

import { TravelRatingService } from './travel-rating.service';

describe('TravelRatingService', () => {
  let service: TravelRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
