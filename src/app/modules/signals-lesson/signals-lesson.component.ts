//Basics:\
//signals are a primitive data type used for reactive programming, instead of using a component tree, it uses a signal graph, which allows angular
//to know exactly where something changed and exactly what changed.
// Change detection goes through the entire component tree and only changes the value that is different,
//the problem becomes that it runs too often and the location of change is unknown
//signals can be used to simplify this by allowing angular to tell the signal exactly what has changed and where.
//So instead of using a component tree it uses as signal graph.
//Signals "signal" to angular that something has changed
//Signals always have an initial value
//You use a signal by calling it like a function: this.signalName();
//Angular doesn't have to subscribe or unsubscribe to signals.
//There are three types of Signals : writable, computed, and effects

//Writable: Used to hold a value and can be updated. This is done with the update and set method.

//Computed: Used to compute a value based on other signals. It will recompute its value when any of its dependencies change.

// Effect: Used to run code when a signal changes but doesn't update any values,
//its a side effect. You shouldn't try to set or update the signals
//In an effect

//Advanced:\
//If you change any signal multiple times, it will only call the effect once, not every time the signal changes.
//This is the same for writable signals and computed signals as well.
//This is known as the glitch-free effect or the push/pull algorithm.
//If you need to log every change, use RXJS, like tap.
//If you want to call a function in an effect but don't want it to effect other signals, you can use untracked;

//RXJS Interoperability:\
//You can change a observable to a signal by wrapping the observable with toSignal() function.

import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  untracked,
  WritableSignal,
} from '@angular/core';

import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-signals-lesson',
  standalone: true,
  imports: [],
  templateUrl: './signals-lesson.component.html',
  styleUrl: './signals-lesson.component.scss',
})
export class SignalsLessonComponent {
  //Writable Signal:
  count: WritableSignal<number> = signal(1);
  readonly readableCount: Signal<number> = signal(1);

  //Computed Signal:
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

  //toSignal():
  date = toSignal(
    interval(1000).pipe(
      map(() => new Date().toLocaleTimeString()),
      tap((time) => console.log(`Time: ${time}`))
    )
  );

  constructor() {
    // Effect Signal:
    effect(
      () => {
        console.log(`The current count is: ${this.count()}`);
        // You can set signals in the effect in V19: this.count.set(1000);
        untracked(() => {
          console.log('Untracked effect');
        });
      }
      // This is for older versions but idk why it wont work: options: {allowWriteableSignals: true });
    );
  }

  ngOnInit(): void {}

  updateCount() {
    this.count.update((count) => count + 1);
  }
}
