import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Unsubscribe } from 'src/app/shared/components/unsubscribe.component';
import { FilterState } from 'src/app/state/filter/filter.state';

@Component({
  selector: 'lbk-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent extends Unsubscribe implements OnInit {
  queryChanged = new Subject<string>();
  @Input('filter') filter!: FilterState;
  @Input('loading') loading!: boolean;

  constructor( private readonly _router: Router) {
    super();
  }

  ngOnInit() {
    this.queryChanged
      .pipe(distinctUntilChanged(), debounceTime(300))
      .subscribe((query) => {
        if (query === '')
          return this._router.navigate(['/'], {
            queryParams: { name: undefined, region: this.filter.region },
          });
        else
          this._router.navigate(['/'], {
            queryParams: { name: query, region: this.filter.region },
          });
      });
  }

  onSearch(query: string) {
    this.queryChanged.next(query);
  }
}
