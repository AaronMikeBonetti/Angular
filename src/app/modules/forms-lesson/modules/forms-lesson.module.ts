import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsLessonComponent } from '../components/forms-lesson.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [FormsLessonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class FormsLessonModule { }
