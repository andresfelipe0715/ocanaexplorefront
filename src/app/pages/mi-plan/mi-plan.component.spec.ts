import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPlanComponent } from './mi-plan.component';

describe('MiPlanComponent', () => {
  let component: MiPlanComponent;
  let fixture: ComponentFixture<MiPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiPlanComponent]
    });
    fixture = TestBed.createComponent(MiPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
