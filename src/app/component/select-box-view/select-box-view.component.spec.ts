import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxViewComponent } from './select-box-view.component';

describe('SelectBoxViewComponent', () => {
  let component: SelectBoxViewComponent;
  let fixture: ComponentFixture<SelectBoxViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBoxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
