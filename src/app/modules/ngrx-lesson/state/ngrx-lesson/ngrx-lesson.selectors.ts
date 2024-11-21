import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ITodo } from '../../models/todo.model';
import { INgrxLessonState } from './ngrx-lesson.reducers';

export const selectTodos = (state: INgrxLessonState) => state.todos;
