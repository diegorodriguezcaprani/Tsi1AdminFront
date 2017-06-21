import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarValoresComponent } from './visualizar-valores.component';

describe('VisualizarValoresComponent', () => {
  let component: VisualizarValoresComponent;
  let fixture: ComponentFixture<VisualizarValoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarValoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
