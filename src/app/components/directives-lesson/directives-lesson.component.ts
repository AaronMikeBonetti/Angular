//Directives are classes that add additional behavior to elements in the the angular application,
// basically directives are used to manipulate the DOM, ex: add element, delete element, hide element, loop element ect.
//There are 4 types

//Component - since a directive is is defined as something that manipulates the DOM, a component would be considered a directive. It takes data and maps it to the DOM

//Structural - used in the template, used to change the DOM layout ex: ngFor, which renders a list element or maps it on every iteration or a ngIf which displays something based on a
//condition

//Attribute - used to change the appearance or behavior of a element ex: ngStyle, used to apply styles to change the appearance or ngModel which creates a FormControl instance on an element,
//this allows allows for us to track the values or user interaction with an element

//Custom- you can create your own directives just like a class or service


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-lesson',
  templateUrl: './directives-lesson.component.html',
  styleUrls: ['./directives-lesson.component.scss']
})
export class DirectivesLessonComponent implements OnInit {

  names: Array<any> = ['Monica','Erica',"Rita","Tina","Sandra","Mary","Jessica"]
  buttonLabel: string = 'Hide'
  hidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideText(){
    this.hidden = !this.hidden
    !this.hidden ? this.buttonLabel = 'Hide' : this.buttonLabel = 'show';
  }

}
