//Decorators provide configuration metadata that determines how the class(component,service,module), property, method or parameter should be processed, instantiated, and used at runtime.
//A decorator takes another function or data and extends or changes the behavior of that function without explicitly modifying the original data or function.
//An example of this is the class pipe decorator, the uppercase pipe takes in a value and makes the string uppercase without modifying the actual data.

//There are 4 types of decorators

//1.Class - Tells us about a particular class’s intent and helps answer questions like whether the class is a component, service or a module.

//  Example: The @Component Decorator marks a class as an Angular component and provides configuration
//  metadata that determines how the component should be processed, instantiated, and used at runtime, same with @Injectable for services.

//2.Property - used to decorate specific properties or variables inside a class.

//  Example: The @Input and @Output Decorator allows a component to exchange data between itself and either
//  its child component or parent component

//3.Method - similar to property decorators but are used for methods instead.

//  Example: @HostListener is used to listen to events and then invokes a method (handleKeyDown) when it occurs.
//           When an event is raised, it generates an “event” object, we can capture this “event” object in @hostListener
//           and can use this event object to modify the target element or get more information about the event that is triggered.

//4.Parameter - allows you to manually tell Angular to inject a particular provider. a provider is just an object that tells the class how to inject the dependency.
//            - it can also be used to do something with a parameter in a method ie : function Thing(@ValidateParameter thingy){}
//            - then just create a function that looks like this: function ValidateParameter(target:any, propertyKey:any, propertyIndex:any){}

//  Example: @Inject is used to provide a custom provider to the class to use a dependency
//
//

//Dependency Injection

//When you have a class from outside of where you are coding but you want to use it, this is where we use dependency injection. A dependency is a object or class with data or methods
//that we might want to use so we dont have to rewrite the code and this also makes testing easier and compiling faster. Dependencies need what is known as a provider to tell the class how to
//gain access to it so this is what the @Injection decorator does, it takes meta data from the dependency and provides it to the class that needs it, why its called a provider.

//providers are an object that tells angular how to associate a token with a value

//when you see:
//                 export class thing {
//                        constructor(someService: SomeService)
//                                                  ^^^^^^^^^ - this is the provider token
//                 }

import { Component, HostBinding, HostListener, Inject, Input, OnInit, Output } from '@angular/core';

//Class Decorator
@Component({
  selector: 'app-decorator-lesson',
  templateUrl: './decorator-lesson.component.html',
  styleUrls: ['./decorator-lesson.component.scss'],
})
export class DecoratorLessonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

   //Property Decorator

    //@Input
  parentToChildDecorator:string = 'this is the parent talking to the child';
  @Output() childToParentDecorator: string;

    //@Output
  propertyCounter: number;

  childToParentDecoratorEvent(count:any):void{
     this.propertyCounter = count
   }

  //Method Decorator
  methodCounter: number = 0;
  lastKeyPressed: any;
  @HostListener('window:keydown', ['$event'])
  
  handleKeyDown(event: KeyboardEvent) {
    this.lastKeyPressed = event.key;
    this.methodCounter++;
  }

  resetCounter() {
    this.methodCounter = 0;
    this.lastKeyPressed = null;
  }

}
