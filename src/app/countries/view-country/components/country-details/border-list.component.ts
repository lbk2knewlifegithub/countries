import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-border-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="inline-block py-2 font-semibold">Borders Countries:</p>

    <ng-container *ngFor="let border of borders">
      <lbk-border [border]="border"></lbk-border>
    </ng-container>
  `,
  styles: [
    `
      :host {
        @apply flex flex-wrap items-center gap-6;
      }
    `,
  ],
})
export class BorderListComponent {
  @Input() borders!: string[];
}
