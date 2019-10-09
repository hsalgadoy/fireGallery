import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechainComponent } from './valuechain.component';

describe('ValuechainComponent', () => {
  let component: ValuechainComponent;
  let fixture: ComponentFixture<ValuechainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuechainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
