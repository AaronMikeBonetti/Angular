import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-lesson',
  templateUrl: './forms-lesson.component.html',
  styleUrls: ['./forms-lesson.component.scss']
})
export class FormsLessonComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })

    this.myForm = this.fb.group({
      email: [
        '',
        Validators.required,
        Validators.email 
      ],
      password: [
        '',
        Validators.required,
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")
      ],
      age: [
        null, 
        Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(99)
      ],
      message: '',
      career: '',
      homePhone: phone,
      cellPhone: phone,
      otherPhones: this.fb.array([]),
      agree: [
        false,
        Validators.requiredTrue
      ]
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  get otherPhones() {
    return this.myForm.get('otherPhones') as FormArray
  }

  get email() {
    return this.myForm.get('email')
  }

  get password() {
    return this.myForm.get('password')
  }

  get age () {
    return this.myForm.get('age')
  }

  get agree () {
    return this.myForm.get('agree')
  }

  get homePhone () {
    return this.myForm.get('homePhone')
  }

  addOtherPhones(){
    const otherPhones = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })
    this.otherPhones.push(otherPhones)
  }
  deleteOtherPhones(index){
    this.otherPhones.removeAt(index)
  }

  handleSubmit(){
   alert('Form Submitted')
  }

}
