import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsServiceComponent } from './animals-service.component';

describe('AnimalsServiceComponent', () => {
  let component: AnimalsServiceComponent;
  let fixture: ComponentFixture<AnimalsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
