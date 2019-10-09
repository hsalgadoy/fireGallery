import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclutionsComponent } from './conclutions.component';

describe('ConclutionsComponent', () => {
  let component: ConclutionsComponent;
  let fixture: ComponentFixture<ConclutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
