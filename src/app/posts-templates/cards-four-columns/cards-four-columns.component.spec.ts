import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFourColumnsComponent } from './cards-four-columns.component';

describe('CardsFourColumnsComponent', () => {
  let component: CardsFourColumnsComponent;
  let fixture: ComponentFixture<CardsFourColumnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsFourColumnsComponent]
    });
    fixture = TestBed.createComponent(CardsFourColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
