import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteBItemComponent } from './note-bitem.component';

describe('NoteBItemComponent', () => {
  let component: NoteBItemComponent;
  let fixture: ComponentFixture<NoteBItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteBItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteBItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
