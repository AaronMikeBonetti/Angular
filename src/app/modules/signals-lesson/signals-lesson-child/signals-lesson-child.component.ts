import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-signals-lesson-child',
  standalone: true,
  imports: [],
  templateUrl: './signals-lesson-child.component.html',
  styleUrl: './signals-lesson-child.component.scss',
})
export class SignalsLessonChildComponent {
  parentSignalInputExample = input<string>();
  childSignalOutputExample = output<string>();
}
