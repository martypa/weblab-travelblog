import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelBlogEntryComponent } from './travel-blog-entry.component';

describe('TravelBlogEntryComponent', () => {
  let component: TravelBlogEntryComponent;
  let fixture: ComponentFixture<TravelBlogEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelBlogEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelBlogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
