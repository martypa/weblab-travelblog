import { TestBed } from '@angular/core/testing';

import { TableLoaderService } from './table-loader.service';

describe('BlogLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableLoaderService = TestBed.get(TableLoaderService);
    expect(service).toBeTruthy();
  });
});
