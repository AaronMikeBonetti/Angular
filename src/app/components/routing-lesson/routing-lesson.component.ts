import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-routing-lesson',
  templateUrl: './routing-lesson.component.html',
  styleUrls: ['./routing-lesson.component.scss'],
})
export class RoutingLessonComponent implements OnInit {
  html: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  public routingModuleCode = `
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

  ngOnInit(): void {}

}
