import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerServivesComponent } from './custumer-servives.component';

describe('CustumerServivesComponent', () => {
  let component: CustumerServivesComponent;
  let fixture: ComponentFixture<CustumerServivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumerServivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumerServivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
