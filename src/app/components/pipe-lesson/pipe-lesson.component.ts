import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-lesson.component.html',
  styleUrls: ['./pipe-lesson.component.scss']
})



export class PipeLessonComponent implements OnInit {

  powerInput: number = 2;
  boostFactor: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
