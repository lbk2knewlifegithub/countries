import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProcessBarLoadingComponent } from './process-bar-loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProcessBarLoadingComponent],
  exports: [ProcessBarLoadingComponent],
})
export class ProcessBarLoadingModule {}
