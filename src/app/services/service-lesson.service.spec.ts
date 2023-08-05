import { TestBed } from '@angular/core/testing';

import { ServiceLessonService } from './service-lesson.service';

describe('ServiceLessonService', () => {
  let service: ServiceLessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
