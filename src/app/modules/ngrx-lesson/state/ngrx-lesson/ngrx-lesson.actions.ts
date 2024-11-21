import { createAction, props } from '@ngrx/store';
import { ITodo } from '../../models/todo.model';

export const loadTodos = createAction('[NgrxLessonComponent] Loading Todos');

export const addTodo = createAction(
  '[NgrxLessonComponent] Add Todo',
  props<{ todo: ITodo }>()
);

export const removeTodo = createAction(
  '[NgrxLessonComponent] Remove Todo',
  props<{ id: number }>()
);

export const loadTodosSuccess = createAction(
  '[NgrxLessonComponent] Load Todos successfully',
  props<{ todos: ITodo[] }>()
);

export const loadTodosFailure = createAction(
  '[NgrxLessonComponent] Load Todos failed',
  props<{ error: string }>()
);
