import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodFileViewComponent } from './uplod-file-view.component';

describe('UplodFileViewComponent', () => {
  let component: UplodFileViewComponent;
  let fixture: ComponentFixture<UplodFileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplodFileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplodFileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
