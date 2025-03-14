// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // other routes

  {
    path: '',
    loadChildren: () => 
      import('./landing-page/landingPage.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'admin',
    loadChildren: () => 
      import('./admin-landing-page/adminLandingPage.module').then((m) => m.AdminLandingPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
