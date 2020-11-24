import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBox5Component } from './dialog-box5.component';

describe('DialogBox5Component', () => {
  let component: DialogBox5Component;
  let fixture: ComponentFixture<DialogBox5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBox5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBox5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
