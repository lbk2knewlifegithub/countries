import { Component, Inject, Input } from '@angular/core';
import { CountriesRepoFake } from 'src/app/shared/repo/countries/countries-fake.repo';
import { CountriesRepo } from 'src/app/shared/repo/countries/countries.repo';

@Component({
  selector: 'lbk-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.scss'],
})
export class BorderComponent {
  @Input() borderCode!: string;
  country$ = this._repo.getCountryByCode(this.borderCode);

  constructor(
    @Inject(CountriesRepoFake)
    private readonly _repo: CountriesRepo
  ) {}
}
