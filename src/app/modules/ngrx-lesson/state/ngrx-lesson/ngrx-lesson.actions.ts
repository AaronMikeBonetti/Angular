import { createAction, props } from '@ngrx/store';
import { ITodo } from '../../models/todo.model';

export const loadTodos = createAction('[NgrxLessonComponent] Loading Todos');

export const loadTodosSuccess = createAction(
  '[NgrxLessonComponent] Load Todos successfully'
);

export const loadTodosFailure = createAction(
  '[NgrxLessonComponent] Load Todos failed'
);

export const addTodo = createAction(
  '[NgrxLessonComponent] Add Todo',
  props<{ todo: ITodo }>()
);

export const removeTodo = createAction(
  '[NgrxLessonComponent] Remove Todo',
  props<{ id: number }>()
);
