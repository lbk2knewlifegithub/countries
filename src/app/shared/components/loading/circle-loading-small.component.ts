import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-circle-loading-small',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ``,
  styles: [
    `
      :host {
        position: relative;
        width: 30px;
        height: 30px;
        @apply animate-spin bg-red-900;
      }
    `,
  ],
})
export class CircleLoadingSmallComponent {}
