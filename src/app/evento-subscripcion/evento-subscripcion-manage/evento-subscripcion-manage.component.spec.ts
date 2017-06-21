import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoSubscripcionManageComponent } from './evento-subscripcion-manage.component';

describe('EventoSubscripcionManageComponent', () => {
  let component: EventoSubscripcionManageComponent;
  let fixture: ComponentFixture<EventoSubscripcionManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoSubscripcionManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoSubscripcionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
