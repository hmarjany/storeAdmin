import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryCellRendererComponent } from './edit-category-cell-renderer.component';

describe('EditCategoryCellRendererComponent', () => {
  let component: EditCategoryCellRendererComponent;
  let fixture: ComponentFixture<EditCategoryCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCategoryCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
