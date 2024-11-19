//Basics:\
//signals are a primitive data type used for reactive programming, instead of using a component tree, it uses a signal graph, which allows angular
//to know exactly where something changed and exactly what changed.
// Change detection goes through the entire component tree and only changes the value that is different,
//the problem becomes that it runs too often and the location of change is unknown
//signals can be used to simplify this by allowing you to tell angular exactly what has changed and where.
//So instead of using a component tree it uses as signal graph.
//Signals "signal" to angular that something has changed.
//Signals always have an initial value.
//You use a signal by calling it like a function: this.signalName();
//Angular doesn't have to subscribe or unsubscribe to signals.
//There are three types of Signals : writable, computed, and effects

//Writable: Used to hold a value and can be updated. This is done with the update and set method.

//Computed: Used to compute a value based on other signals. It will recompute its value when any of its dependencies change.

// Effect: Used to run code when a signal changes but doesn't update any values,
// its a side effect. You shouldn't try to set or update the signals
// in an effect

//Advanced:\
//If you change any signal multiple times, it will only call the effect once, not every time the signal changes.
//This is the same for writable signals and computed signals as well.
//This is known as the glitch-free effect or the push/pull algorithm.
//If you need to log every change, use RXJS, like tap.
//If you want to call a function in an effect but don't want it to effect other signals, you can use untracked;

//RXJS Interoperability:\
//Why Signals? Simplicity, Glitch-free effect, and always provides a value.
//You can change a observable to a signal by wrapping the observable with toSignal() function.
//You can also then convert a signal to an observable with the toObservable() function.

//New Api: viewChild()
//You can use the new api to access the viewChild as an observable.
//Remember you can't access viewChild in ngOnInit() or the constructor directly
//you have to use the afterNextRender() method to access the updated viewChild, otherwise it
//throws a ExpressionChangedAfterCheckedError.
//Resource()

import {
  afterNextRender,
  Component,
  computed,
  effect,
  ElementRef,
  output,
  Signal,
  signal,
  untracked,
  viewChild,
  WritableSignal,
} from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { interval, Observable } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs/operators';
import { SignalsLessonChildComponent } from './signals-lesson-child/signals-lesson-child.component';

@Component({
  selector: 'app-signals-lesson',
  standalone: true,
  imports: [AsyncPipe, SignalsLessonChildComponent],
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
  toSignalSignalCode = `
      date: Signal<string> = toSignal(
        interval(1000).pipe(
          map(() => new Date().toLocaleTimeString()),
          tap((time) => console.log('Time: ${'time'}'))
        ),`;
  toObservableSignalCode = `date$ = toObservable(this.date);`;
  viewChildSignalCode = `
      viewChild<'ElementRef'<'HTMLInputElement'>'>('viewChildExample');

      constructor() {
        afterNextRender(() => console.log(this.viewChildExample()?.nativeElement));
      }`;
  inputAndOutputSignalCode = `
    //-------Child Component------------

      parentSignalInputExample = input'<'string'>'();
      childSignalOutputExample = output'<'string'>'();

    //-------Parent Component-----------

    displayChildSignalOutputExample($event: string) {
    const childSignalOutputElement = document.querySelector(
      '#childSignalOutputExample'
    );
    if (childSignalOutputElement) {
      childSignalOutputElement.textContent = $event;
    }
  }`;
  modelSignalCode = `
      viewChild<'ElementRef'<'HTMLInputElement'>'>('viewChildExample');

      constructor() {
        afterNextRender(() => console.log(this.viewChildExample()?.nativeElement));
      }`;

  //toSignal():
  date: Signal<string> = toSignal(
    interval(1000).pipe(
      map(() => new Date().toLocaleTimeString()),
      tap((time) => console.log(`Time: ${time}`))
    ),

    //Make it required so it isn't undefined
    // { requireSync: true }

    //Provide a default value
    { initialValue: new Date().toLocaleTimeString() }
  );

  //toObservable()
  //With this you can use the async pipe operator

  date$ = toObservable(this.date);

  //viewChild()

  viewChildExample =
    viewChild<ElementRef<HTMLInputElement>>('viewChildExample');

  //input()

  parentSignalInputExample: string = 'This is input from the parent!';

  modelSignalExample: string = 'This is the model from the parent!';

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

    //For viewChild
    afterNextRender(() => console.log(this.viewChildExample()?.nativeElement));
  }

  ngOnInit(): void {}

  updateCount() {
    this.count.update((count) => count + 1);
  }

  displayChildSignalOutputExample($event: string) {
    const childSignalOutputElement = document.querySelector(
      '#childSignalOutputExample'
    );
    if (childSignalOutputElement) {
      childSignalOutputElement.textContent = $event;
    }
  }
  displayChildSignalModelExample($event: string) {
    const childSignalOutputElement = document.querySelector(
      '#childSignalModelExample'
    );
    if (childSignalOutputElement) {
      childSignalOutputElement.textContent = $event;
    }
  }
}
