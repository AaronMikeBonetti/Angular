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

@Component({
  selector: 'app-observable-lesson',
  templateUrl: './observable-lesson.component.html',
  styleUrls: ['./observable-lesson.component.scss']
})
export class ObservableLessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
