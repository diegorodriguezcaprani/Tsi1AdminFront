import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoComplejoListComponent } from './evento-complejo-list.component';

describe('EventoComplejoListComponent', () => {
  let component: EventoComplejoListComponent;
  let fixture: ComponentFixture<EventoComplejoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoComplejoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoComplejoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
