import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'countries',
        loadChildren: () =>
          import('./countries').then((m) => m.CountriesPreviewModule),
      },
      {
        path: 'details/:fullName',
        loadChildren: () =>
          import('./countries').then((m) => m.CountryDetailsModule),
      },
      {
        path: '',
        redirectTo: 'countries',
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
