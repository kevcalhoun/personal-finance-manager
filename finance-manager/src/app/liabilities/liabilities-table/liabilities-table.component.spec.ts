import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilitiesTableComponent } from './liabilities-table.component';

describe('LiabilitiesTableComponent', () => {
  let component: LiabilitiesTableComponent;
  let fixture: ComponentFixture<LiabilitiesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiabilitiesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiabilitiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
