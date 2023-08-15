// Synchronous tasks happen in order
//(checking window for rain, get response immediately)

// Asynchronous tasks are taken out of the stack and resolved in parallel with the stack, eventually returning something to the stack
// (ask someone to check weather, you can continue whatever till they tell you the weather)

// Promises are a way of dealing with asynchronous data or tasks. Can not be canceled and can only return one response
// (The ask is the promise)

// Observables are like promises but they can be subscribed to and unsubscribed. they can return multiple responses.
// (you turn on a weather station radio ie. you subscribe to an observable, and listen for updates, turning it off would be unsubscribing)

//Subjects are special observables that allow us to multi-cast an observable.
//(Other people can turn on their radios to get the same weather info)

//behaviorSubject is a special subject that returns the last response it gave as soon as you subscribe to it.
//(A radio might take a second to give you the weather, while checking a weather app on your phone gives you the latest info immediately when you check or subscribe to it)

//replaySubject is another special subject that returns all the responses that particular observable has resolved when you subscribe to it.
//(like checking the history of a given years weather history on the weather app)

//A provider is the source 'providing' the data
// (the radio station)

//A consumer is the one 'consuming the data
//(you are the consumer)

import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {filter, map, mergeMap } from 'rxjs/operators'

@Component({
  selector: 'app-observable-lesson',
  templateUrl: './observable-lesson.component.html',
  styleUrls: ['./observable-lesson.component.scss'],
})
export class ObservableLessonComponent implements OnInit {

  numbersObservable: Observable<number> = of(1, 2, 3, 4, 5);
  lettersObservable: Observable<string> = of('a', 'b', 'c')

  mapObservableData: number[] = []
  filterObservableData: number[] = []
  mergeMapObservableData: string[] = []
  
  creatingObservableCode: string = `
  import { Observable } from 'rxjs';

  myObservable = new Observable((observer) => {
    // Emit values using observer methods
    observer.next('Hello');
    observer.next('World');
    // ...
    });
  }`

  subscribingCode: string = `
  myObservable.subscribe(
    (value) => {
      console.log(value); // Output: Hello, World
    },
    (error) => {
      console.error(error);
    },
    () => {
      console.log('Observable completed');
    }
  );`

  mapOperatorCode: string = `
    import { of } from 'rxjs';
    import { map } from 'rxjs/operators';

    numbersObservable = of(1, 2, 3, 4, 5);

    this.numbersObservable.pipe(
      map((value) => value * 2)
    ).subscribe((result) => {
      this.mapObserverData.push(result)
    });`

  filterOperatorCode: string = `
    import { of } from 'rxjs';
    import { filter } from 'rxjs/operators';

    this.numbersObservable = of(1, 2, 3, 4, 5);

    this.numbersObservable.pipe(
      filter(value => value > 2)).subscribe(result => 
      this.filterObservableData.push(result))
  }`

  mergeMapOperatorCode: string = `
    import { of } from 'rxjs';
    import { mergeMap } from 'rxjs/operators';

    lettersObservable = of('a', 'b', 'c');

    this.lettersObservable.pipe(
      mergeMap((letter) => of(letter.toUpperCase() + letter.toLowerCase()))
    ).subscribe((result) => {
      this.mergeMapObservableData.push(result)
    });
  `
  switchMapOperatorCode: string = `
    import { of, interval } from 'rxjs';
    import { switchMap } from 'rxjs/operators';

    source = of(1, 2, 3);

    source.pipe(
      switchMap(value => interval(value * 1000).pipe(take(2)))
    ).subscribe(result => {
      console.log(result); // Output: 0, 0, 1, 0, 1, 2
    });
  `

  concatMapOperatorCode: string = `
    import { of } from 'rxjs';
    import { concatMap } from 'rxjs/operators';

    source = of(2000, 1000);

    source.pipe(
      concatMap(val => of('Delayed by: (val)ms').pipe(delay(val)))
    ).subscribe(result => {
      console.log(result); // Output delayed messages in sequence
    });`

  ofOperatorCode: string = `
    import { of } from 'rxjs';

    observable = of(1, 2, 3, 4, 5);

    observable.subscribe(value => {
      console.log(value); // Outputs: 1, 2, 3, 4, 5
    }, error => {
      console.error(error);
    }, () => {
      console.log('Observable completed');
    });`

  reduceOperatorCode: string = `
    import { of } from 'rxjs';
    import { reduce } from 'rxjs/operators';

    source = of(1, 2, 3, 4);

    source.pipe(
      reduce((acc, value) => acc + value, 0)
    ).subscribe(result => {
      console.log(result); // Output: 10 (1 + 2 + 3 + 4)
    });`

  pluckOperatorCode: string = `
    import { from } from 'rxjs';
    import { pluck } from 'rxjs/operators';

    const data = [
      { name: 'Alice', age: 28 },
      { name: 'Bob', age: 22 },
      { name: 'Charlie', age: 31 }
    ];

    from(data).pipe(
      pluck('name')
    ).subscribe(name => {
      console.log(name); // Output: Alice, Bob, Charlie
    });`
  
  

  constructor() {}

  ngOnInit(): void {
    
    this.numbersObservable.pipe(
      map(value => value * 2))
      .subscribe((result) => {
      this.mapObservableData.push(result)
    });

    this.numbersObservable.pipe(
      filter(value => value > 2)).subscribe(result => 
      this.filterObservableData.push(result))

      this.lettersObservable.pipe(
        mergeMap((letter) => of(letter.toUpperCase() + letter.toLowerCase()))
      ).subscribe((result) => {
        this.mergeMapObservableData.push(result)
      });
  }
}
