import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopiconeComponent } from './topicone.component';

describe('TopiconeComponent', () => {
  let component: TopiconeComponent;
  let fixture: ComponentFixture<TopiconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopiconeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopiconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
