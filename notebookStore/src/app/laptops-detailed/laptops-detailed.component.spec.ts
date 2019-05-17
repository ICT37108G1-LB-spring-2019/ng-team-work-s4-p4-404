import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsDetailedComponent } from './laptops-detailed.component';

describe('LaptopsDetailedComponent', () => {
  let component: LaptopsDetailedComponent;
  let fixture: ComponentFixture<LaptopsDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopsDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopsDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
