import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

// Define the application routes
export const routes: Routes = [ // Export routes here
  { path: '', component: LandingPageComponent }, // Default route
  { path: '**', redirectTo: '' },               // Catch-all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
