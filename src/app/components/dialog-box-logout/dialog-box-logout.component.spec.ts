import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxLogoutComponent } from './dialog-box-logout.component';

describe('DialogBoxLogoutComponent', () => {
  let component: DialogBoxLogoutComponent;
  let fixture: ComponentFixture<DialogBoxLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBoxLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
