import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCardsRightComponent } from './two-cards-right.component';

describe('TwoCardsRightComponent', () => {
  let component: TwoCardsRightComponent;
  let fixture: ComponentFixture<TwoCardsRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoCardsRightComponent]
    });
    fixture = TestBed.createComponent(TwoCardsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
