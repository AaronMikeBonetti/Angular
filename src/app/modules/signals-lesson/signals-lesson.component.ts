//Basics:\
//signals are a primitive data type used for reactive programming, instead of using a component tree, it uses a signal graph, which allows angular
//to know exactly where something changed and exactly what changed.
// Change detection goes through the entire component tree and only changes the value that is different,
//the problem becomes that it runs too often and the location of change is unknown
//signals can be used to simplify this by allowing angular to tell the signal exactly what has changed and where.
//So instead of using a component tree it uses as signal graph.
//Signals "signal" to angular that something has changed
//signals always have an initial value
// you use a signal by calling it like a function
//there are three types of Signals : writable, computed, and effects

import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-signals-lesson',
  standalone: true,
  imports: [],
  templateUrl: './signals-lesson.component.html',
  styleUrl: './signals-lesson.component.scss',
})
export class SignalsLessonComponent {
  count: WritableSignal<number> = signal(1);
  readonly readableCount: Signal<number> = signal(1);
  tenTimesCount: Signal<number> = computed(() => this.count() * 10);
  initializeSignalCode =
    'public count: WritableSignal&gtnumber&gt = signal(0);';
  setSignalCode = 'this.count.set(1)';
  updateSignalCode = 'this.count.update((count) => count + 1);';
  computedSignalCode =
    'tenTimesCount: Signal&gtnumber&gt = computed(() => this.count() * 10);';
  effectSignalCode = `effect(() => {
              console.log('The current count is: ${this.count()}');
        });`;

  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }

  ngOnInit(): void {}

  updateCount() {
    this.count.update((count) => count + 1);
  }
}
