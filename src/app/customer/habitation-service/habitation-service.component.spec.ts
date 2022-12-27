import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitationServiceComponent } from './habitation-service.component';

describe('HabitationServiceComponent', () => {
  let component: HabitationServiceComponent;
  let fixture: ComponentFixture<HabitationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitationServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
