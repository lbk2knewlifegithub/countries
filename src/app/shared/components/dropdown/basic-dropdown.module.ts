import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
  imports: [CommonModule],
})
export class DropdownModule {}
