import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'countries',
        loadChildren: () =>
          import('./countries').then((m) => m.CountriesPreviewModule),
        data: {
          animation: 'Countries',
        },
      },
      {
        path: 'country',
        loadChildren: () =>
          import('./countries').then((m) => m.ViewCountryModule),
        data: {
          animation: 'Country',
        },
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
