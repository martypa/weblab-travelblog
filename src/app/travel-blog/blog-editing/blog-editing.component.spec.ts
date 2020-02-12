import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditingComponent } from './blog-editing.component';

describe('BlogEditingComponent', () => {
  let component: BlogEditingComponent;
  let fixture: ComponentFixture<BlogEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
