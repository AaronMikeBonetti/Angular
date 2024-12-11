import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { ITodosData } from '../interfaces/todos-data';
import { ITodo} from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class ServiceLessonService {

  constructor() { }
  private http = inject(HttpClient);
  private url = 'https://dummyjson.com/todos'

  getAllTodos(): Observable<ITodosData>{
    return this.http.get<ITodosData>(this.url).pipe(tap(() => console.log('all todos loading..')));
  }
  getTodo(id: number): Observable<ITodo>{
    return this.http.get<ITodo>(this.url).pipe(tap(() => console.log('all todos loading..')));
  }
}
