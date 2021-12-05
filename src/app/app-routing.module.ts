import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
        data: {
          reuseRoute: true
        }
      },
      {
        path: 'details/:fullName',
        loadChildren: () => import('./pages/country-detail/country-detail.module').then((m) => m.CountryDetailModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
