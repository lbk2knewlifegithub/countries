import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '@lbk/models';

@Component({
  selector: 'lbk-country-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './country-preview.component.html',
})
export class CountryPreviewComponent {
  @Input() country!: Country;
}
