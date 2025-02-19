import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLectureComponent } from './new-lecture.component';

describe('NewLectureComponent', () => {
  let component: NewLectureComponent;
  let fixture: ComponentFixture<NewLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
