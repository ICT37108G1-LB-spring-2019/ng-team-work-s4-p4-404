import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteBListComponent } from './note-blist.component';

describe('NoteBListComponent', () => {
  let component: NoteBListComponent;
  let fixture: ComponentFixture<NoteBListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteBListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteBListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
