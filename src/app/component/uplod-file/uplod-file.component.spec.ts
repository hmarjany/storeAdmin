import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodFileComponent } from './uplod-file.component';

describe('UplodFileComponent', () => {
  let component: UplodFileComponent;
  let fixture: ComponentFixture<UplodFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplodFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplodFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
