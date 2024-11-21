import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgrxLessonService } from '../../services/ngrx-lesson.service';
import {
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
} from './ngrx-lesson.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {
  actions$ = inject(Actions);
  ngrxLessonService = inject(NgrxLessonService);
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.ngrxLessonService.getTodosData().pipe(
          map((todos: any) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosFailure({ error })))
        )
      )
    )
  );

  constructor() {}
}
