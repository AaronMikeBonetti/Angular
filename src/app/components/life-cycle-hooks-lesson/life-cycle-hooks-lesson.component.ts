import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks-lesson',
  templateUrl: './life-cycle-hooks-lesson.component.html',
  styleUrls: ['./life-cycle-hooks-lesson.component.scss']
})
export class LifeCycleHooksLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
