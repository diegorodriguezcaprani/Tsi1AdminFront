import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsValuesBySensorComponent } from './reports-values-by-sensor.component';

describe('ReportsValuesBySensorComponent', () => {
  let component: ReportsValuesBySensorComponent;
  let fixture: ComponentFixture<ReportsValuesBySensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsValuesBySensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsValuesBySensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
