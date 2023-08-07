import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCardsLeftComponent } from './two-cards-left.component';

describe('TwoCardsLeftComponent', () => {
  let component: TwoCardsLeftComponent;
  let fixture: ComponentFixture<TwoCardsLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoCardsLeftComponent]
    });
    fixture = TestBed.createComponent(TwoCardsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
