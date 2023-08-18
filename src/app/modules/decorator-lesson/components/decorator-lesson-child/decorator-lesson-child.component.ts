import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decorator-lesson-child',
  templateUrl: './decorator-lesson-child.component.html',
  styleUrls: ['./decorator-lesson-child.component.scss']
})
export class DecoratorLessonChildComponent implements OnInit {

  @Input() parentToChildDecorator: string;

  @Output() childEventData = new EventEmitter<number>()
  clickCounter: number = 0

  childToParentDecoratorEvent(count: number){
    count++
    this.clickCounter = count
    this.childEventData.emit(this.clickCounter)
  }
  resetCounter(){
    this.clickCounter = 0
    this.childEventData.emit(this.clickCounter)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
