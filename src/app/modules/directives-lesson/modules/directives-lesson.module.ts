import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesLessonComponent } from '../components/directives-lesson.component';
import { HoverDirective } from '../directives/hover.directive';

@NgModule({
  declarations: [DirectivesLessonComponent, HoverDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesLessonModule { }
