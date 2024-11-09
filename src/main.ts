import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
// import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
// import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
// import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
// import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
// import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
      // MatInputModule,
      // MatCheckboxModule,
      // MatChipsModule,
      // MatSelectModule,
      // MatButtonModule
    ),
    FormsModule,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
