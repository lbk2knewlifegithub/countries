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
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid red;
        border-bottom: 4px solid red;
        @apply animate-spin;
      }
    `,
  ],
})
export class CircleLoadingSmallComponent {}
