import { TestBed } from '@angular/core/testing';

import { TrendsService } from './trends.service';

describe('TrendsService', () => {
  let service: TrendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
