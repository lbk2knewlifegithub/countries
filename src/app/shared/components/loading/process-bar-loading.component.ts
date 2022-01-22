import { Component } from '@angular/core';

@Component({
  selector: 'lbk-process-bar-loading',
  template: ``,
  styles: [
    `
      :host {
        @apply fixed top-0 left-0 z-50 inline-flex w-full h-3 bg-indigo-400 rounded-full opacity-75 animate-ping;
      }
    `,
  ],
})
export class ProcessBarLoadingComponent {}
