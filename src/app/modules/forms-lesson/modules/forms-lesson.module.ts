import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsLessonComponent } from '../components/forms-lesson.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';

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
