import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourImagesComponent } from './four-images.component';

describe('FourImagesComponent', () => {
  let component: FourImagesComponent;
  let fixture: ComponentFixture<FourImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourImagesComponent]
    });
    fixture = TestBed.createComponent(FourImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
