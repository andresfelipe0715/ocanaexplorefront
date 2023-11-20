import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCreatorComponent } from './service-creator.component';

describe('ServiceCreatorComponent', () => {
  let component: ServiceCreatorComponent;
  let fixture: ComponentFixture<ServiceCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCreatorComponent]
    });
    fixture = TestBed.createComponent(ServiceCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
