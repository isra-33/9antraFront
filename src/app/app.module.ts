import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRoutingModule } from './app.routes'; // Import AppRoutingModule
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    LandingPageComponent,
    BrowserModule,
    CommonModule, // Add CommonModule here
    FormsModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
})
export class AppModule {}
