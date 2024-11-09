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
import { Observable, combineLatest, forkJoin, interval, of, zip } from 'rxjs';
import {
  concatMap,
  delay,
  filter,
  map,
  mergeMap,
  switchMap,
  take,
} from 'rxjs/operators';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-observable-lesson',
    templateUrl: './observable-lesson.component.html',
    styleUrls: ['./observable-lesson.component.scss'],
    standalone: true,
    imports: [NgFor],
})
export class ObservableLessonComponent implements OnInit {
  numbersObservable$: Observable<number> = of(1, 2, 3, 4, 5);
  lettersObservable$: Observable<string> = of('a', 'b', 'c').pipe(delay(1000));

  mapObservableData: number[] = [];
  filterObservableData: number[] = [];
  mergeMapObservableData: string[] = [];
  switchMapObservableData: any[] = [];
  concatMapObservableData: any[] = [];
  combineLatestObservableData: any[] = [];

  creatingObservableCode: string = `
  import { Observable } from 'rxjs';

  myObservable = new Observable((observer) => {
    // Emit values using observer methods
    observer.next('Hello');
    observer.next('World');
    // ...
    });
  }`;

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
  );`;

  mapOperatorCode: string = `
    import { of } from 'rxjs';
    import { map } from 'rxjs/operators';

    numbersObservable = of(1, 2, 3, 4, 5);

    this.numbersObservable.pipe(
      map((value) => value * 2)
    ).subscribe((result) => {
      this.mapObserverData.push(result)
    });`;

  filterOperatorCode: string = `
    import { of } from 'rxjs';
    import { filter } from 'rxjs/operators';

    this.numbersObservable = of(1, 2, 3, 4, 5);

    this.numbersObservable.pipe(
      filter(value => value > 2)).subscribe(result =>
      this.filterObservableData.push(result))
  }`;

  mergeMapOperatorCode: string = `
    import { of } from 'rxjs';
    import { mergeMap } from 'rxjs/operators';

    lettersObservable = of('a', 'b', 'c');

    this.lettersObservable.pipe(
      mergeMap((letter) => of(letter.toUpperCase() + letter.toLowerCase()))
    ).subscribe((result) => {
      this.mergeMapObservableData.push(result)
    });
  `;

  switchMapOperatorCode: string = `
  import { switchMap } from 'rxjs/operators';

  this.numbersObservable = of(1, 2, 3, 4, 5);

  this.numbersObservable$
      .pipe(
        switchMap((number) => {
          setTimeout(()=>this.switchMapObservableData.push(number), 10000);
          return this.lettersObservable$;
        })
      )
      .subscribe(letter => this.switchMapObservableData = [letter]
      );
  }
  `;

  concatMapOperatorCode: string = `
    import { of } from 'rxjs';
    import { concatMap } from 'rxjs/operators';

    this.numbersObservable = of(1, 2, 3, 4, 5);

    this.numbersObservable$
      .pipe(
        concatMap((number) => {
          this.concatMapObservableData.push(number)
          return this.lettersObservable$.pipe(delay(4000));
        })
      )
      .subscribe(letter => this.concatMapObservableData.push(letter)
      );
    }`;

  ofOperatorCode: string = `
    import { of } from 'rxjs';

    observable = of(1, 2, 3, 4, 5);

    observable.subscribe(value => {
      console.log(value); // Outputs: 1, 2, 3, 4, 5
    }, error => {
      console.error(error);
    }, () => {
      console.log('Observable completed');
    });`;

  reduceOperatorCode: string = `
    import { of } from 'rxjs';
    import { reduce } from 'rxjs/operators';

    source = of(1, 2, 3, 4);

    source.pipe(
      reduce((acc, value) => acc + value, 0)
    ).subscribe(result => {
      console.log(result); // Output: 10 (1 + 2 + 3 + 4)
    });`;

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
    });`;
  combineLatestOperatorCode: string = `
    import { from } from 'rxjs';
    import { combineLatest } from 'rxjs/operators';

    const data1 = ['Billy','John','Cindy'];

    const data2 = ['Chad','Nicole','Sally'];

    combineLatest(data1, data2).subscribe((names1, names2)=>{
    console.log(names1, names2)
    })`;

  constructor() {}

  ngOnInit(): void {
    //map

    this.numbersObservable$
      .pipe(map((value) => value * 2))
      .subscribe((result) => {
        this.mapObservableData.push(result);
      });

    //filter

    this.numbersObservable$
      .pipe(filter((value) => value > 2))
      .subscribe((result) => this.filterObservableData.push(result));

    //mergeMap

    this.lettersObservable$
      .pipe(
        mergeMap((letter) => of(letter.toUpperCase() + letter.toLowerCase()))
      )
      .subscribe((result) => {
        this.mergeMapObservableData.push(result);
      });

    //switchMap
    this.numbersObservable$
      .pipe(
        switchMap((number) => {
          this.switchMapObservableData.push(number);
          return this.lettersObservable$.pipe(delay(1000));
        })
      )
      .subscribe((letter) => {
        this.switchMapObservableData = [letter];
        console.log('switch map changed value!', letter);
      });

    //concatMap
    this.numbersObservable$
      .pipe(
        concatMap((number) => {
          this.concatMapObservableData.push(number);
          return this.lettersObservable$.pipe(delay(4000));
        })
      )
      .subscribe((letter) => this.concatMapObservableData.push(letter));
    //pluck

    //combineLatest
    combineLatest([this.numbersObservable$, this.lettersObservable$]).subscribe(
      ([names1, names2]) => {
        console.log('combineLatest', names1, names2);
      }
    );

    //forkJoin
    forkJoin([this.numbersObservable$, this.lettersObservable$]).subscribe(
      ([names1, names2]) => {
        console.log('forkJoin', names1, names2);
      }
    );

    //zip
    zip(this.numbersObservable$, this.lettersObservable$).subscribe((names) => {
      console.log('zip', names);
    });

    //districtUntil
    //tap
    //retry
    //catchError
  }
}
