import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveImagesComponent } from './five-images.component';

describe('FiveImagesComponent', () => {
  let component: FiveImagesComponent;
  let fixture: ComponentFixture<FiveImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveImagesComponent]
    });
    fixture = TestBed.createComponent(FiveImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
