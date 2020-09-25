import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountingComponent } from './acounting.component';

describe('AcountingComponent', () => {
  let component: AcountingComponent;
  let fixture: ComponentFixture<AcountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
