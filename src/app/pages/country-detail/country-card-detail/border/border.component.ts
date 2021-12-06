import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnInit
} from '@angular/core';
import { catchError, of } from 'rxjs';
import { Unsubscribe } from 'src/app/shared/components/unsubscribe.component';
import { Country } from 'src/app/shared/model/country.model';
import { CountriesRepoImpl } from 'src/app/shared/repo/countries/countries-impl.repo';
import { CountriesRepo } from 'src/app/shared/repo/countries/countries.repo';

@Component({
  selector: 'lbk-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BorderComponent extends Unsubscribe implements OnInit {
  @Input() borderCode!: string;
  country?: Country;
  loading = false;

  constructor(
    @Inject(CountriesRepoImpl)
    private readonly _repo: CountriesRepo,
    private readonly _ref: ChangeDetectorRef
  ) {
    super();
  }
  ngOnInit(): void {
    this.loading = true;
    this.appendSub = this._repo
      .getCountryByCode(this.borderCode)
      .pipe(
        catchError((error) => {
          this.loading = false;
          this._ref.detectChanges();
          return of(undefined);
        })
      )
      .subscribe((country) => {
        this.country = country;
        this.loading = false;
        this._ref.detectChanges();
      });
  }
}
