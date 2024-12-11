import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { DecoratorLessonComponent } from './modules/decorator-lesson/components/decorator-lesson-parent/decorator-lesson-parent.component';
import { DirectivesLessonComponent } from './modules/directives-lesson/components/directives-lesson.component';
import { PipeLessonComponent } from './modules/pipe-lesson/components/pipe-lesson.component';
import { FormsLessonComponent } from './modules/forms-lesson/components/forms-lesson.component';
import { ObservableLessonComponent } from './modules/observable-lesson/components/observable-lesson.component';
import { RoutingLessonComponent } from './modules/routing-lesson/components/routing-lesson.component';
import { LifeCycleHooksLessonComponent } from './modules/life-cycle-hooks-lesson/components/life-cycle-hooks-lesson.component';
import { NgrxLessonComponent } from './modules/ngrx-lesson/components/ngrx-lesson.component';
import { SignalsLessonComponent } from './modules/signals-lesson/signals-lesson.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { QuizComponent } from './modules/quiz/quiz.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'decorators', component: DecoratorLessonComponent },
  { path: 'directives', component: DirectivesLessonComponent },
  { path: 'pipes', component: PipeLessonComponent },
  { path: 'forms', component: FormsLessonComponent },
  { path: 'observables', component: ObservableLessonComponent },
  { path: 'routing', component: RoutingLessonComponent },
  { path: 'life-cycle-hooks', component: LifeCycleHooksLessonComponent },
  { path: 'ngrx', component: NgrxLessonComponent },
  { path: 'signals', component: SignalsLessonComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
