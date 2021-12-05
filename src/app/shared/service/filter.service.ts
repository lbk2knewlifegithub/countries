import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CountryFilter } from '../model/country-filter.model';

@Injectable({ providedIn: 'root' })
export class FilterService {
  _filter = new BehaviorSubject<CountryFilter>({ page: 1 });
  filter$ = this._filter.asObservable();

  constructor(private readonly _router: Router) {
  }

  async filterById(_id: string): Promise<void> {
    await this._router.navigate([`/details/${_id}`]);
  }

  async filterByName(name: string): Promise<void> {
    await this._navigate({ name, page: 1 });
  }

  async filterByPage(page: number): Promise<void> {
    await this._navigate({ page });
  }

  async filterByRegion(region: string): Promise<void> {
    await this._navigate({ region, page: 1 });
  }

  createFilter(filter: Partial<CountryFilter>): CountryFilter {
    const { page } = filter;
    const result: CountryFilter = {
      ...this.filter,
      ...filter,
      page: page ?? 1
    };


    // pure to nest filter
    const { name, region } = result;

    if (name == '') {
      delete result.name;
    }

    if (region == 'All') {
      delete result.region;
    }

    return this.filter = result;
  }

  private async _navigate(filter: CountryFilter): Promise<void> {
    this.filter = this.createFilter(filter);
    await this._router.navigate([`/home`], { queryParams: this.filter });
  }

  get filter(): CountryFilter {
    return this._filter.value;
  }

  set filter(filter: CountryFilter) {
    this._filter.next(filter);
  }

  async goHome(): Promise<void> {
    this.filter = { page: 1 };
    await this._router.navigate([`/home`], { queryParams: this.filter });
  }

}
