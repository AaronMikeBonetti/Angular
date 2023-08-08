import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-directives-lesson',
  templateUrl: './directives-lesson.component.html',
  styleUrls: ['./directives-lesson.component.scss']
})
export class DirectivesLessonComponent implements OnInit {

  names: Array<string> = ['Monica','Erica',"Rita","Tina","Sandra","Mary","Jessica"]
  buttonLabel: string = 'Hide'
  hidden: boolean = false;
  color = 'purple'
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
