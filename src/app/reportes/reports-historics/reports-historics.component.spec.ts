import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsHistoricsComponent } from './reports-historics.component';

describe('ReportsHistoricsComponent', () => {
  let component: ReportsHistoricsComponent;
  let fixture: ComponentFixture<ReportsHistoricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsHistoricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsHistoricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
