import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLiabilityComponent } from './create-liability.component';

describe('CreateLiabilityComponent', () => {
  let component: CreateLiabilityComponent;
  let fixture: ComponentFixture<CreateLiabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLiabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLiabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
