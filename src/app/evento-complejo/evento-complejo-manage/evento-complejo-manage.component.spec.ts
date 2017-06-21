import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoComplejoManageComponent } from './evento-complejo-manage.component';

describe('EventoComplejoManageComponent', () => {
  let component: EventoComplejoManageComponent;
  let fixture: ComponentFixture<EventoComplejoManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoComplejoManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoComplejoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
