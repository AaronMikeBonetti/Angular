import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgrxLessonService {
  html = inject(HttpClient);
  url: string = 'https://dummyjson.com/todos';

  getTodosData() {
    return this.html.get<any>(this.url);
  }

  deleteTodo(id: number) {
    return this.html.delete(`${this.url}/${id}`);
  }

  constructor() {}
}
