import { Component, Input } from '@angular/core';
@Component({
  selector: 'lbk-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() active = false;

  onClick(): void {
    this.active = !this.active;
  }
  onBlur(event: Event) {
    setTimeout(() => {this.active = false}, 0)
  }
}
