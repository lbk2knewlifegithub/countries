import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-theme',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- moon -->
    <ng-container *ngIf="darkTheme; else sun">
      <i class="fas fa-sun"></i>
      <p class="font-semibold">Light Mode</p>
    </ng-container>
    <!-- end moon -->

    <!-- sun  -->
    <ng-template #sun>
      <i class="fas fa-moon"></i>
      <p class="font-semibold">Dark Mode</p>
    </ng-template>
    <!-- end sun  -->
  `,
  styles: [
    `
      :host {
        @apply flex items-center gap-2 text-xs cursor-pointer sm:text-base lg:text-lg;
      }
    `,
  ],
})
export class ThemeComponent {
  @Input() darkTheme!: boolean;

  get name(): string {
    return this.darkTheme ? 'Dark Mode' : 'Light Mode';
  }
}
