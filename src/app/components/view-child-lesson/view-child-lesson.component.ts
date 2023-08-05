//The @ViewChild is a common property decorator
//It is used a lot like document.getElementById(id)
//You use it to get references to template elements so you can see all the associated attributes
//You need to first add a #name to the element in the template then you can use the @ViewChild to hook into it
//We type it as a ElementRef which is a wrapper for that element


import { AfterViewInit, Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-lesson',
  templateUrl: './view-child-lesson.component.html',
  styleUrls: ['./view-child-lesson.component.scss']
})
export class ViewChildLessonComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('nameRef') nameElementRef: ElementRef;
  nameRef: string;
  

  constructor() { }

  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    this.nameElementRef.nativeElement.style.color = "red"
    this.nameElementRef.nativeElement.value = "blue"  
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.nameRef, this.nameElementRef)
  }

  ngOnInit(): void {
    
  }


}








//decorators are functions that configure how a class, component or function compiles
//property,paremeter,method,class
//DI is when you want to use a class or object outside of the code you are in
//a provider tells the class how to import that dependancy
//promise, 1 value cant be canceled
//observable can stream mulitple values, can be unsubscribed to 
//subjects can be multi casted
//behaviorsubject is a subject but gives you the most up to date value
//replaysubject give you all the values
//async only emits the a value when the observable resolves or completes
// veiw child works like document getelementbyid, you have to use a hash in the template to connect it
//elementRef is a wrapper for dom elements
//