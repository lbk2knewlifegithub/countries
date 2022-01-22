import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-country-not-existed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid gap-4 mt-28 place-content-center">
      <h2 class="text-2xl font-black text-center">Country not existed!</h2>
      <a routerLink="/" class="mx-auto text-center text-blue-500 underline"
        >Go Home</a
      >
    </div>
  `,
})
export class CountryNotExistedComponent {}
