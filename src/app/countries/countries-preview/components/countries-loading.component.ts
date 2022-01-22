import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-countries-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lbk-circle-loading-large
      class="absolute -translate-x-1/2 top-11 left-1/2"
    ></lbk-circle-loading-large>

    <ng-container *ngFor="let i of array">
      <lbk-skeleton-small></lbk-skeleton-small>
    </ng-container>
  `,
  styles: [
    `
      :host {
        @apply relative grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
      }
    `,
  ],
})
export class CountriesLoadingComponent {
  @Input() numberOfSkeletons = 10;

  get array() {
    return new Array(this.numberOfSkeletons);
  }
}
