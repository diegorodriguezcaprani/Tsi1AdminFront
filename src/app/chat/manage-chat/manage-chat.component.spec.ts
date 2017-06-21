import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChatComponent } from './manage-chat.component';

describe('ManageChatComponent', () => {
  let component: ManageChatComponent;
  let fixture: ComponentFixture<ManageChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
