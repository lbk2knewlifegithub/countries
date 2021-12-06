import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonSmallComponent } from './skeleton-small.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SkeletonSmallComponent],
  exports: [SkeletonSmallComponent]
})
export class SkeletonSmallModule { }
