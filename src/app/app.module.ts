import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { ExponentialPowerPipe } from './pipes/exponential-power/exponential-power.pipe';
import { PipeLessonComponent } from './components/pipe-lesson/pipe-lesson.component';


@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    ExponentialPowerPipe,
    PipeLessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
