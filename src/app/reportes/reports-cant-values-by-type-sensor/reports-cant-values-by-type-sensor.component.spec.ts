import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsCantValuesByTypeSensorComponent } from './reports-cant-values-by-type-sensor.component';

describe('ReportsCantValuesByTypeSensorComponent', () => {
  let component: ReportsCantValuesByTypeSensorComponent;
  let fixture: ComponentFixture<ReportsCantValuesByTypeSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsCantValuesByTypeSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsCantValuesByTypeSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
