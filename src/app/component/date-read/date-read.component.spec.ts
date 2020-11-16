import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateReadComponent } from './date-read.component';

describe('DateReadComponent', () => {
  let component: DateReadComponent;
  let fixture: ComponentFixture<DateReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
