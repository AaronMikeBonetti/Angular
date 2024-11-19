import { TestBed } from '@angular/core/testing';

import { NgrxLessonService } from './ngrx-lesson.service';

describe('NgrxLessonService', () => {
  let service: NgrxLessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxLessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
