import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { DecoratorLessonChildComponent } from '../decorator-lesson-child/decorator-lesson-child.component';
@Component({
    selector: 'app-decorator-lesson',
    templateUrl: './decorator-lesson-parent.component.html',
    styleUrls: ['./decorator-lesson-parent.component.scss'],
    standalone: true,
    imports: [
        DecoratorLessonChildComponent,
        NgIf,
        UpperCasePipe,
    ],
})
export class DecoratorLessonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.nameRef, this.nameElementRef);
  }

  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    this.nameElementRef.nativeElement.style.color = 'red';
    this.nameElementRef.nativeElement.value = 'blue';
  }

  //Property Decorator

  //@Input/Output

  @Output() childToParentDecorator: string;
  @ViewChild('nameRef') nameElementRef: ElementRef;
  nameRef: string;
  parentToChildDecorator: string = 'This sentence was passed from the parent';

  //@Output
  propertyCounter: number;

  childToParentDecoratorEvent(count: any): void {
    this.propertyCounter = count;
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
