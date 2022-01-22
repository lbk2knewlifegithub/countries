import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesPreviewPageComponent } from './containers/countries-preview-page.component';

const routes: Routes = [{ path: '', component: CountriesPreviewPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
