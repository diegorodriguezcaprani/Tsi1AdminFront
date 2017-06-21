import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsContainterComponent } from './reports-containter.component';

describe('ReportsContainterComponent', () => {
  let component: ReportsContainterComponent;
  let fixture: ComponentFixture<ReportsContainterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsContainterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsContainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
