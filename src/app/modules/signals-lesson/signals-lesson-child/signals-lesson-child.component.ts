import { Component, input, model, output } from '@angular/core';

@Component({
    selector: 'app-signals-lesson-child',
    imports: [],
    templateUrl: './signals-lesson-child.component.html',
    styleUrl: './signals-lesson-child.component.scss'
})
export class SignalsLessonChildComponent {
  parentSignalInputExample = input<string>();
  childSignalOutputExample = output<string>();
  modelSignalExample = model<string>('test');
}
