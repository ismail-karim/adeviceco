import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisPagesComponent } from './devis-pages.component';

describe('DevisPagesComponent', () => {
  let component: DevisPagesComponent;
  let fixture: ComponentFixture<DevisPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
