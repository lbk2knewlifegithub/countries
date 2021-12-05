import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { Unsubscribe } from 'src/app/shared/components/unsubscribe.component';

@Component({
  selector: 'lbk-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent extends Unsubscribe implements OnInit {
  query = '';
  queryChanged = new Subject<string>();
  @Output() search = new EventEmitter<string>();

  constructor(private readonly _router: Router) {
    super();
  }

  ngOnInit() {
    this.queryChanged.pipe(debounceTime(300))
    .subscribe((query) => {
      this._router.navigate(['/'], { queryParams: { name: query } });
    });
  }

  onSearch(query: string) {
    this.queryChanged.next(query);
  }
}
