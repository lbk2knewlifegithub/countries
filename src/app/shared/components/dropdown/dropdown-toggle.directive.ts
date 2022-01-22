import { Directive, HostBinding, HostListener } from '@angular/core';
import { DropDownComponent } from './dropdown.component';

@Directive({
  selector: 'button[dropDownToggle]',
})
export class DropDownToggleDirective {
  @HostBinding('attr.aria-expanded') ariaExpanded = this.dropdown.expanded;
  @HostBinding('attr.aria-controls') ariaControls = this.dropdown.contentId;

  @HostListener('mouseenter') mouseOver() {
    console.log("enter");

    if (this.dropdown.hoverToggle) return;

    this.dropdown.hoverToggle = true;
    this.dropdown.maskForCheck();
  }

  @HostListener('mouseleave') mouseOut() {
    if (!this.dropdown.hoverToggle) return;

    setTimeout(() => {
      this.dropdown.hoverToggle = false;
      if (this.dropdown.hoverContent) return;
      this.dropdown.maskForCheck();
    }, 1000);
  }

  constructor(public dropdown: DropDownComponent) {}
}
