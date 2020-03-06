import { TestBed } from '@angular/core/testing';

import { BlogEntryDeleteService } from './blog-entry-delete.service';

describe('BlogEntryDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogEntryDeleteService = TestBed.get(BlogEntryDeleteService);
    expect(service).toBeTruthy();
  });
});
