import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedItemComponent } from './purchased-item.component';

describe('PurchasedItemComponent', () => {
  let component: PurchasedItemComponent;
  let fixture: ComponentFixture<PurchasedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
