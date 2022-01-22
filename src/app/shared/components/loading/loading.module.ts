import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CircleLoadingLargeComponent } from './circle-loading-large.component';
import { CircleLoadingSmallComponent } from './circle-loading-small.component';
import { ProcessBarLoadingComponent } from './process-bar-loading.component';
import { SkeletonSmallComponent } from './skeleton-small.component';

export const COMPONENTS = [
  ProcessBarLoadingComponent,
  SkeletonSmallComponent,
  CircleLoadingSmallComponent,
  CircleLoadingLargeComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class LoadingModule {}
