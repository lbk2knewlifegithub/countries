import { Directive, HostListener, TemplateRef } from '@angular/core';
import { DropDownComponent } from './dropdown.component';

@Directive({
  selector: '[dropDownContent]',
})
export class DropDownContentDirective {

  constructor(
    public dropdown: DropDownComponent,
    public templateRef: TemplateRef<unknown>
  ) {}
}
