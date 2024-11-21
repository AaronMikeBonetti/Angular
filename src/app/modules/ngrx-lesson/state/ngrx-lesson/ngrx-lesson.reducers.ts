import { createReducer, on } from '@ngrx/store';
import { ITodo } from '../../models/todo.model';
import {
  addTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
} from './ngrx-lesson.actions';

//This defines the NGRXLessonState/TodoState
export interface INgrxLessonState {
  todos: ITodo[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}
//This initializes the NGRXLessonState/TodoState
export const initialState: INgrxLessonState = {
  todos: [],
  error: '',
  status: 'pending',
};

export const NgrxLessonComponentReducer = createReducer(
  initialState,

  //The reducer listens for the 'addTodos' action, takes the current state and the payload or the new todo....

  // action  cur state   payload
  //  ^          ^        ^
  //  ^          ^        ^
  //  ^          ^        ^
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: Math.round(Math.random()) * 100,
        completed: false,
        todo: todo.todo,
        userId: Math.round(Math.random()) * 100,
      },
    ],
  })),

  //Same here except we are passing the id of the todo to be removed and it then is filtered out of the current state's todos array.

  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),

  on(loadTodos, (state) => ({ ...state, status: 'loading' as 'loading' })),

  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    error: '',
    status: 'success' as 'success',
  })),

  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error' as 'error',
  }))
);
