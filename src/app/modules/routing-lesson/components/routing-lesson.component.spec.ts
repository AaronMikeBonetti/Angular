import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingLessonComponent } from './routing-lesson.component';

describe('RoutingLessonComponent', () => {
  let component: RoutingLessonComponent;
  let fixture: ComponentFixture<RoutingLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RoutingLessonComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
