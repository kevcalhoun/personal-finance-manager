import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdManagerComponent } from './household-manager.component';

describe('HouseholdManagerComponent', () => {
  let component: HouseholdManagerComponent;
  let fixture: ComponentFixture<HouseholdManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseholdManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
