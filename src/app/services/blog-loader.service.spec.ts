import { TestBed } from '@angular/core/testing';

import { BlogLoaderService } from './blog-loader.service';

describe('BlogLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogLoaderService = TestBed.get(BlogLoaderService);
    expect(service).toBeTruthy();
  });
});
