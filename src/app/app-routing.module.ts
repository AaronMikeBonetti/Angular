import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorLessonComponent } from './components/decorator-lesson/decorator-lesson-parent/decorator-lesson-parent.component';
import { DirectivesLessonComponent } from './components/directives-lesson/directives-lesson.component';
import { ViewChildLessonComponent } from './components/view-child-lesson/view-child-lesson.component';
import { HomeComponent } from './components/home/home.component';
import { ObservableLessonComponent } from './components/observable-lesson/observable-lesson.component';
import { RxjsLessonComponent } from './components/rxjs-lesson/rxjs-lesson.component';
import { PipeLessonComponent } from './components/pipe-lesson/pipe-lesson.component';
import { NgrxLessonComponent } from './components/ngrx-lesson/ngrx-lesson.component';
import { RoutingLessonComponent } from './components/routing-lesson/routing-lesson.component';
import { LifeCycleHooksLessonComponent } from './components/life-cycle-hooks-lesson/life-cycle-hooks-lesson.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'decorators', component: DecoratorLessonComponent},
  {path: 'directives', component: DirectivesLessonComponent},
  {path: 'pipes', component: PipeLessonComponent},
  {path: 'view-child', component: ViewChildLessonComponent},
  {path: 'observables', component: ObservableLessonComponent},
  {path: 'routing', component: RoutingLessonComponent},
  {path: 'life-cycle-hooks', component: LifeCycleHooksLessonComponent},
  {path: 'rxjs', component: RxjsLessonComponent},
  {path: 'ngrx', component: NgrxLessonComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
