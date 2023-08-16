import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryLineComponent } from './admin-category-line.component';

describe('AdminCategoryLineComponent', () => {
  let component: AdminCategoryLineComponent;
  let fixture: ComponentFixture<AdminCategoryLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCategoryLineComponent]
    });
    fixture = TestBed.createComponent(AdminCategoryLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
