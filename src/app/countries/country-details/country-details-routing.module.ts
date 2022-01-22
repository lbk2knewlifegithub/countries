import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsPageComponent } from './containers';

const routes: Routes = [{ path: '', component: CountryDetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryDetailsRoutingModule {}
