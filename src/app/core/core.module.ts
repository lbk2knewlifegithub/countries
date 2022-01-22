import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '@lbk/shared';
import { COMPONENTS } from './components';
import { AppComponent } from './containers/app.component';

const CONTAINERS = [AppComponent];

@NgModule({
  imports: [CommonModule, RouterModule, LoadingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
