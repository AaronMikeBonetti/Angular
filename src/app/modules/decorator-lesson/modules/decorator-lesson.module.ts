import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorLessonComponent } from '../components/decorator-lesson-parent/decorator-lesson-parent.component';
import { DecoratorLessonChildComponent } from '../components/decorator-lesson-child/decorator-lesson-child.component';

@NgModule({
  declarations: [
    DecoratorLessonComponent,
    DecoratorLessonChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DecoratorLessonModule { }
