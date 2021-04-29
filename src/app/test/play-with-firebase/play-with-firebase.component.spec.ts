import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWithFirebaseComponent } from './play-with-firebase.component';

describe('PlayWithFirebaseComponent', () => {
  let component: PlayWithFirebaseComponent;
  let fixture: ComponentFixture<PlayWithFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayWithFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayWithFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
