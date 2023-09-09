import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IData } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  obs$: BehaviorSubject<any> = new BehaviorSubject<any>({
    name:'John',
    email: 'john@gmail.com'
  })


  baseUrl: string = '12345'

  getData():Observable<any>{
    return this.obs$
  }

}
