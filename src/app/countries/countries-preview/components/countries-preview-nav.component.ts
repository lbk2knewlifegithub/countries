import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-countries-preview-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      class="flex flex-col gap-10 md:flex-row md:items-center md:justify-between"
    >
      <!--    search bar-->
      <lbk-search-bar
        class="block max-w-lg md:flex-grow"
        [name]="name"
        (search)="searchByName.emit($event)"
      ></lbk-search-bar>
      <!--    end search bar-->

      <!--    filter-->
      <lbk-filter
        [region]="region"
        (searchByRegion)="searchByRegion.emit($event)"
      ></lbk-filter>
      <!--    filter-->
    </nav>
  `,
})
export class CountriesPreviewNavComponent {
  @Input()
  region!: string;
  @Input()
  name!: string;

  @Output() searchByName = new EventEmitter<string>();
  @Output() searchByRegion = new EventEmitter<string>();
}
