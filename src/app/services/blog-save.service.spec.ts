import { TestBed } from '@angular/core/testing';

import { BlogSaveService } from './blog-save.service';

describe('BlogSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogSaveService = TestBed.get(BlogSaveService);
    expect(service).toBeTruthy();
  });
});
