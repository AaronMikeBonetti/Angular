//NGRX
//How does NGRX lifecycle work in Angular?
//1. A user triggers an event (clicking the submit button eg.) and then that component then
//dispatches an action to the store.
//2. The action function then is interpreted by the reducer to update the state. The reducer is responsible for
//determining how actions should modify the state.
//3. The reducer function then takes the current or updated state and saved the new state in the store. The store which
//is often global stores ALL the state in the application.
//4. Then When a component wants to access the state, it uses a selector function.

//Actions:
//actions need to have access to the data IMMEDIATELY, actions CANT pass asynchronous call to a reducer.

//Reducers:
//You typically want a reducer for each feature of your application.
//reducers are pure functions meaning given the same input, always give out the same output. They should not
//have any side effects such as API calls, mutations, or change any other part of the application.

//Effects:
//Because actions cant handle asynchronous calls, effects are used to handle these actions.
//effects are not pure functions and can call any side effects it wants.

//Asynchronous handling:
//Actions need to have access to the data IMMEDIATELY, actions cant pass asynchronous calls to a reducer.
//In this case, the reducer handles the action call and puts a flag on the data
//which updates the store with a status update of loading.
//An effect then listens to when that action is dispatched and handles the asynchronous call.
//Once the data is loaded, the effect will dispatch a NEW action with either a success or error and
//then the reducer will update the store with the new status or data.

import { Component, inject, OnInit } from '@angular/core';
import { NgrxLessonService } from '../services/ngrx-lesson.service';

@Component({
  selector: 'app-ngrx-lesson',
  templateUrl: './ngrx-lesson.component.html',
  styleUrls: ['./ngrx-lesson.component.scss'],
  standalone: true,
  imports: [],
})
export class NgrxLessonComponent implements OnInit {
  constructor() {}

  ngrxLessonService: NgrxLessonService = inject(NgrxLessonService);

  ngOnInit(): void {
    this.ngrxLessonService.getTodosData().subscribe((data) => {
      console.log(data);
    });
  }
}
