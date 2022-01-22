import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-circle-loading-large',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="relative flex w-20 h-20">
      <span
        class="absolute inline-flex w-full h-full bg-red-600 rounded-full opacity-75 animate-ping"
      ></span>
      <span
        class="relative inline-flex w-20 h-20 border-t-2 border-b-2 border-red-500 rounded-full animate-spin"
      ></span>
    </span>
  `,
})
export class CircleLoadingLargeComponent {}
