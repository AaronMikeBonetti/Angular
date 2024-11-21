//NGRX
//How does NGRX lifecycle work in Angular?
//1. A user triggers an event (clicking the submit button eg.) and then that component then
//dispatches an action to a reducer.
//2. The action function then is interpreted by the reducer to update the state or store. The reducer is responsible for
//determining how actions should modify the state.
//3. The reducer function then takes the current or updated state and saves the new state in the store. The store which
//is often global, stores ALL the state in the application.
//4. Then when a component wants to access the state, it uses a selector function.

//Actions:
//actions need to have access to the data IMMEDIATELY, actions CANT pass asynchronous call to a reducer.

//Reducers:
//You typically want a reducer for each feature (ie. Todo component) of your application.
//reducers are pure functions meaning given the same input, always give out the same output. They should not
//have any side effects such as API calls, mutations, or change any other part of the application.

//Effects:
//Because reducers cant handle asynchronous calls, effects are used to handle these actions.
//effects are not pure functions and can call any side effects it wants.

//Store:
//The store is the single source of truth for your application. It also is immutable which means you cant overwrite
//or modify it, you must pass it a new object with the old state and the changes you want to make.

//Asynchronous handling:
//Since Actions need to have access to the data IMMEDIATELY, actions cant pass asynchronous calls to a reducer.
//In this case, the reducer handles the action call and puts a flag on the data with something
//like a status of loading... that it passes to the store.
//An effect then listens to when that action is dispatched and handles the asynchronous call.
//Once the data is loaded, the effect will dispatch a NEW action with either a success or error and
//then the reducer will update the store with the new status or data.

import { Component, inject, OnInit } from '@angular/core';
import { NgrxLessonService } from '../services/ngrx-lesson.service';
import { Store } from '@ngrx/store';
import {
  addTodo,
  loadTodos,
  removeTodo,
} from '../state/ngrx-lesson/ngrx-lesson.actions';
import { ITodo } from '../models/todo.model';
import { Observable } from 'rxjs';
import { selectTodos } from '../state/ngrx-lesson/ngrx-lesson.selectors';
import { INgrxLessonState } from '../state/ngrx-lesson/ngrx-lesson.reducers';

@Component({
  selector: 'app-ngrx-lesson',
  templateUrl: './ngrx-lesson.component.html',
  styleUrls: ['./ngrx-lesson.component.scss'],
  imports: [],
})
export class NgrxLessonComponent implements OnInit {
  store: Store = inject(Store);
  public todo: string;
  // public todos$: Observable<ITodo[]> = this.store.select(selectTodos);
  // $allTodos: Observable<any> = this.store.select(selectAllTodos);

  constructor() {}

  ngrxLessonService: NgrxLessonService = inject(NgrxLessonService);

  ngOnInit(): void {
    this.ngrxLessonService.getTodosData().subscribe((data) => {
      console.log(data);
    });
    this.store.dispatch(loadTodos());
    // this.todos$.subscribe((data) => console.log(data));
  }

  addTodo(todo: ITodo): void {
    this.store.dispatch(addTodo({ todo: todo }));
    this.todo = '';
  }
  removeTodo(todo: ITodo): void {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
