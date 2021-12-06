import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input
} from '@angular/core';
@Component({
  selector: 'lbk-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() active = false;

  constructor(private readonly _ref: ChangeDetectorRef) {}

  onClick(): void {
    this.active = !this.active;
  }
  onBlur(event: Event) {
    setTimeout(() => {
      this.active = false;
      this._ref.detectChanges();
    }, 200);
  }
}
