import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcDecennalleComponent } from './rc-decennalle.component';

describe('RcDecennalleComponent', () => {
  let component: RcDecennalleComponent;
  let fixture: ComponentFixture<RcDecennalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcDecennalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcDecennalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
