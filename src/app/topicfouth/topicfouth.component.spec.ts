import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicfouthComponent } from './topicfouth.component';

describe('TopicfouthComponent', () => {
  let component: TopicfouthComponent;
  let fixture: ComponentFixture<TopicfouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicfouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicfouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
