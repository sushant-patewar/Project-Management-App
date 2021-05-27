import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEffortsComponent } from './log-efforts.component';

describe('LogEffortsComponent', () => {
  let component: LogEffortsComponent;
  let fixture: ComponentFixture<LogEffortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogEffortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogEffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
