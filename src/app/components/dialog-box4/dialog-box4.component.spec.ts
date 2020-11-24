import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBox4Component } from './dialog-box4.component';

describe('DialogBox4Component', () => {
  let component: DialogBox4Component;
  let fixture: ComponentFixture<DialogBox4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBox4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
