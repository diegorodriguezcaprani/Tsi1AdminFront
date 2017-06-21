import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoSubscripcionComponent } from './evento-subscripcion.component';

describe('EventoSubscripcionComponent', () => {
  let component: EventoSubscripcionComponent;
  let fixture: ComponentFixture<EventoSubscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoSubscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoSubscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
