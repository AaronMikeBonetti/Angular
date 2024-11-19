import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './modules/footer/components/footer.component';
import { NavBarComponent } from './modules/nav-bar/components/nav-bar.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [NavBarComponent, FooterComponent, RouterOutlet]
})

export class AppComponent {
  title = 'Angular';
}
