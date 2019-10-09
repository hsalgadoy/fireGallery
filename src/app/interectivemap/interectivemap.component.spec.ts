import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterectivemapComponent } from './interectivemap.component';

describe('InterectivemapComponent', () => {
  let component: InterectivemapComponent;
  let fixture: ComponentFixture<InterectivemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterectivemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterectivemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
