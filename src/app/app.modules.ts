import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page-component/landing-page.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppComponent,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: '**', redirectTo: '' },
    ]),
  ],
  providers: [AppComponent],
  bootstrap: [],
})
export class AppModule {}
