import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopdetailedinfoComponent } from './laptopdetailedinfo.component';

describe('LaptopdetailedinfoComponent', () => {
  let component: LaptopdetailedinfoComponent;
  let fixture: ComponentFixture<LaptopdetailedinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopdetailedinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopdetailedinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
