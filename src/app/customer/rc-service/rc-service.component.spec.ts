import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcServiceComponent } from './rc-service.component';

describe('RcServiceComponent', () => {
  let component: RcServiceComponent;
  let fixture: ComponentFixture<RcServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
