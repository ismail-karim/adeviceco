import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMotoComponent } from './auto-moto.component';

describe('AutoMotoComponent', () => {
  let component: AutoMotoComponent;
  let fixture: ComponentFixture<AutoMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
