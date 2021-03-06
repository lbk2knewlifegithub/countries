import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-back-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="flex items-center gap-3 px-8 py-4 space-x-4 text-xl shadow-lg cursor-pointer"
    >
      <span class="fab fas fa-long-arrow-alt-left"></span>
      <span class="font-medium">Back</span>
    </button>
  `,
})
export class BackButtonComponent {}
