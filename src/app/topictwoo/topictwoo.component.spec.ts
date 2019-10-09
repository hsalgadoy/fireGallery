import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopictwooComponent } from './topictwoo.component';

describe('TopictwooComponent', () => {
  let component: TopictwooComponent;
  let fixture: ComponentFixture<TopictwooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopictwooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopictwooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
