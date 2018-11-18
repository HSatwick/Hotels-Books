import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcusrionsComponent } from './excusrions.component';

describe('ExcusrionsComponent', () => {
  let component: ExcusrionsComponent;
  let fixture: ComponentFixture<ExcusrionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcusrionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcusrionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
