import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBox7Component } from './dialog-box7.component';

describe('DialogBox7Component', () => {
  let component: DialogBox7Component;
  let fixture: ComponentFixture<DialogBox7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBox7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBox7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
