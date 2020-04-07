import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicslistsComponent } from './topicslists.component';

describe('TopicslistsComponent', () => {
  let component: TopicslistsComponent;
  let fixture: ComponentFixture<TopicslistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicslistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicslistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
