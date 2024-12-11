import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink, Router } from '@angular/router';
import { ServiceLessonService } from '../../services-lesson/service-lesson.service';
import { ITodosData } from '../../interfaces/todos-data';
import { ITodo } from '../../interfaces/todo';


@Component({
  selector: 'app-routing-lesson',
  templateUrl: './routing-lesson.component.html',
  styleUrls: ['./routing-lesson.component.scss'],
  imports: [RouterLink],
})
export class RoutingLessonComponent implements OnInit {
  html: SafeHtml;
  todos: ITodo[];

  constructor() {}

  private router = inject(Router);
  private serviceLesson = inject(ServiceLessonService);

  public routingModuleCode: string = `
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { HomeComponent } from './components/home/home.component';

    const routes: Routes = [
              {path: '', component: HomeComponent},
          ]

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })

    export class AppRoutingModule { }
    `;

  routingHTML = `
    &ltnav&gt
    &lta routerLink="/home" routerLinkActive="active"&gtHome&lt/a&gt
    &lta routerLink="/about" routerLinkActive="active"&gtAbout&lt/a&gt
    &lt/nav&gt
    &ltrouter-outlet&gt&lt/router-outlet&gt
    `;

  ngOnInit(): void {
    this.serviceLesson.getAllTodos().subscribe((todos) => (this.todos = todos.todos.slice(0,5)));
  }

  goToTodo(id: number): void {
    this.router.navigate(['/todos', id]);
  }
}
