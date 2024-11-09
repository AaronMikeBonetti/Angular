import { Component, OnInit } from '@angular/core';
import { ReversePipe } from '../../../shared/pipes/reverse/reverse.pipe';
import { ExponentialPowerPipe } from '../../../shared/pipes/exponential-power/exponential-power.pipe';
import { NgIf, UpperCasePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-pipe-component',
    templateUrl: './pipe-lesson.component.html',
    styleUrls: ['./pipe-lesson.component.scss'],
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule, FormsModule, NgIf, UpperCasePipe, ExponentialPowerPipe, ReversePipe]
})

export class PipeLessonComponent implements OnInit {

  value: number = 0;
  exponent: number = 0;
  

  constructor() { }

  ngOnInit(): void {
  }

}
