import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsThreeColumnsComponent } from './cards-three-columns.component';

describe('CardsThreeColumnsComponent', () => {
  let component: CardsThreeColumnsComponent;
  let fixture: ComponentFixture<CardsThreeColumnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsThreeColumnsComponent]
    });
    fixture = TestBed.createComponent(CardsThreeColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
