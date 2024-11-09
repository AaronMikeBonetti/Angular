import { Component, OnInit } from '@angular/core';
import { HoverDirective } from '../directives/hover.directive';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
    selector: 'app-directives-lesson',
    templateUrl: './directives-lesson.component.html',
    styleUrls: ['./directives-lesson.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf, NgStyle, HoverDirective]
})
export class DirectivesLessonComponent implements OnInit {

  names: Array<string> = ['Monica','Erica',"Rita","Tina","Sandra","Mary","Jessica"]
  buttonLabel: string = 'Hide'
  hidden: boolean = false;
  color = 'red'
  color2 = 'grey'
  title: string;

  constructor() { }

  ngOnInit(): void {
  }


  hideText(){
    this.hidden = !this.hidden
    !this.hidden ? this.buttonLabel = 'Hide' : this.buttonLabel = 'Show';
  }

}
