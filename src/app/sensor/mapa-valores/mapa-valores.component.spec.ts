import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaValoresComponent } from './mapa-valores.component';

describe('MapaValoresComponent', () => {
  let component: MapaValoresComponent;
  let fixture: ComponentFixture<MapaValoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaValoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
