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
        path: 'country',
        loadChildren: () =>
          import('./countries').then((m) => m.ViewCountryModule),
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
