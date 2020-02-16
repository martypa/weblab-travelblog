import { TestBed } from '@angular/core/testing';

import { TravelSaveService } from './travel-save.service';

describe('TravelSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelSaveService = TestBed.get(TravelSaveService);
    expect(service).toBeTruthy();
  });
});
