import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicthreeComponent } from './topicthree.component';

describe('TopicthreeComponent', () => {
  let component: TopicthreeComponent;
  let fixture: ComponentFixture<TopicthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
