import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-lesson.component.html',
  styleUrls: ['./pipe-lesson.component.scss']
})



export class PipeLessonComponent implements OnInit {

  value: number = 0;
  exponent: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
