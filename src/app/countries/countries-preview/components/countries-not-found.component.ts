import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-countries-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mt-20">
      <h1 class="text-xl italic font-bold text-center lg:text-3xl">
        No country match with name
        <span class="text-indigo-400">{{ name }} </span>

        <!-- region -->
        <span [hidden]="!region">
          and region
          <span class="text-indigo-400">{{ region }}.</span></span
        >
        <!-- end region -->
      </h1>
    </div>
  `,
})
export class CountriesNotFoundComponent {
  @Input() name!: string;
  @Input() region?: string;
}
