import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CircleLoadingComponent } from './circle-loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CircleLoadingComponent],
  exports: [CircleLoadingComponent],
})
export class CircleLoadingModule {}
