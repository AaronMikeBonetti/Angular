import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { ExponentialPowerPipe } from './pipes/exponential-power/exponential-power.pipe';
import { PipeLessonComponent } from './components/pipe-lesson/pipe-lesson.component';
import { FormsModule } from '@angular/forms';
import { ViewChildLessonComponent } from './components/view-child-lesson/view-child-lesson.component';
import { DecoratorLessonComponent } from './components/decorator-lesson/decorator-lesson.component';
import { DirectivesLessonComponent } from './components/directives-lesson/directives-lesson.component';


@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    ExponentialPowerPipe,
    PipeLessonComponent,
    ViewChildLessonComponent,
    DecoratorLessonComponent,
    DirectivesLessonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
