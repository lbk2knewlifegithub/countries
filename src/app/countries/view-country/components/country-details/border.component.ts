import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-border',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      class="px-6 py-2 rounded-md shadow-lg bg-elements"
      [routerLink]="['/country', border]"
      >{{ border }}</a
    >
  `,
})
export class BorderComponent {
  @Input() border!: string;
}
