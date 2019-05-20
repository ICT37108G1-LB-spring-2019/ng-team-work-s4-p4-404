import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoteFound404Component } from './page-note-found404.component';

describe('PageNoteFound404Component', () => {
  let component: PageNoteFound404Component;
  let fixture: ComponentFixture<PageNoteFound404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoteFound404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoteFound404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
