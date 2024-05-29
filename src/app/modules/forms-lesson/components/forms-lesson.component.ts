import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-forms-lesson',
  templateUrl: './forms-lesson.component.html',
  styleUrls: ['./forms-lesson.component.scss'],
})
export class FormsLessonComponent implements OnInit {
  myForm: UntypedFormGroup;
  careers: string[] = ['Dentist', 'Police Man', 'Astronaut'];
  errorMessage: any;
  postId: any;

  constructor(private fb: UntypedFormBuilder, private http: HttpClient) {}

  ngOnInit(): void {

    console.log(this.fb)
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });

    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^\\d{1,4}$')]],
      age: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.min(18),
          Validators.max(99),
        ],
      ],
      message: '',
      career: ['', [Validators.required]],
      homePhone: phone,
      cellPhone: phone,
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

  get career() {
    return this.myForm.get('career');
  }

  get agree() {
    return this.myForm.get('agree');
  }

  get homePhone() {
    return this.myForm.get('homePhone');
  }

  get cellPhone() {
    return this.myForm.get('homePhone');
  }

  handleSubmit() {
    if (this.myForm.valid) {
      const myToken = '123456';
      const headers = { Authorization: `Bearer ${myToken}` };
      const baseUrl = 'www.whatever.com';
      const userName = 'John';
      this.http
        .post(baseUrl + 'users/' + userName + '/repos', this.myForm, {
          headers,
        })
        .pipe(
          catchError((error: any, caught: Observable<any>): Observable<any> => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
            return of();
          })
        )
        .subscribe((data) => {
          this.postId = data.id;
        });
    } else {
      console.log('form not valid');
    }
  }
}
