import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownRawComponent } from './markdown-raw.component';

describe('MarkdownRawComponent', () => {
  let component: MarkdownRawComponent;
  let fixture: ComponentFixture<MarkdownRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownRawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
