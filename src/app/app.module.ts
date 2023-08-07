import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { ExponentialPowerPipe } from './pipes/exponential-power/exponential-power.pipe';
import { PipeLessonComponent } from './components/pipe-lesson/pipe-lesson.component';
import { FormsModule } from '@angular/forms';
import { ViewChildLessonComponent } from './components/view-child-lesson/view-child-lesson.component';
import { DecoratorLessonComponent } from './components/decorator-lesson/decorator-lesson-parent/decorator-lesson-parent.component';
import { DirectivesLessonComponent } from './components/directives-lesson/directives-lesson.component';
import { ObservableLessonComponent } from './components/observable-lesson/observable-lesson.component';
import { NgrxLessonComponent } from './components/ngrx-lesson/ngrx-lesson.component';
import { RxjsLessonComponent } from './components/rxjs-lesson/rxjs-lesson.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RoutingLessonComponent } from './components/routing-lesson/routing-lesson.component';
import { LifeCycleHooksLessonComponent } from './components/life-cycle-hooks-lesson/life-cycle-hooks-lesson.component';
import { DecoratorLessonChildComponent } from './components/decorator-lesson/decorator-lesson-child/decorator-lesson-child.component';
import { HoverDirective } from './components/directives-lesson/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    ExponentialPowerPipe,
    PipeLessonComponent,
    ViewChildLessonComponent,
    DecoratorLessonComponent,
    DirectivesLessonComponent,
    ObservableLessonComponent,
    NgrxLessonComponent,
    RxjsLessonComponent,
    HomeComponent,
    NavBarComponent,
    RoutingLessonComponent,
    LifeCycleHooksLessonComponent,
    DecoratorLessonChildComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
