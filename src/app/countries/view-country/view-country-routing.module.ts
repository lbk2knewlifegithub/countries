import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCountryPageComponent } from './containers';
import { CountryExistsGuard } from './guards';

const routes: Routes = [
  {
    path: ':name',
    component: ViewCountryPageComponent,
    canActivate: [CountryExistsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCountryRoutingModule {}
