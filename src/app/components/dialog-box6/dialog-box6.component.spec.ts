import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBox6Component } from './dialog-box6.component';

describe('DialogBox6Component', () => {
  let component: DialogBox6Component;
  let fixture: ComponentFixture<DialogBox6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBox6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBox6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
