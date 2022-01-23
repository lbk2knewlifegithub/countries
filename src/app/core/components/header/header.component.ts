import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="shadow-md bg-elements">
      <nav class="container flex items-center justify-between py-6">
        <!-- logo -->
        <!-- [queryParams]="filter" -->
        <a routerLink="/countries" class="text-xl font-black lg:text-2xl"
          >Where in the world?</a
        >
        <!-- end logo -->

        <!-- theme -->
        <lbk-theme
          (click)="toggleTheme.emit()"
          [darkTheme]="darkTheme"
        ></lbk-theme>
        <!-- end theme -->
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  @Output() toggleTheme = new EventEmitter<void>();

  @Input() darkTheme!: boolean;
  @Input() loading!: boolean;
}
