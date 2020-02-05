import { TestBed } from '@angular/core/testing';

import { BlogDetailLoaderService } from './blog-detail-loader.service';

describe('BlogDetailLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogDetailLoaderService = TestBed.get(BlogDetailLoaderService);
    expect(service).toBeTruthy();
  });
});
