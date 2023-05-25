import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLiabilityComponent } from './update-liability.component';

describe('UpdateLiabilityComponent', () => {
  let component: UpdateLiabilityComponent;
  let fixture: ComponentFixture<UpdateLiabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLiabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLiabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
