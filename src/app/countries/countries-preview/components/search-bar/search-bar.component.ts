import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unsubscribe } from '@lbk/shared';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'lbk-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent extends Unsubscribe implements OnInit {
  queryChanged = new Subject<string>();

  @Input() name!: string;
  @Input() debounceTime = 300;

  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.queryChanged
      .pipe(distinctUntilChanged(), debounceTime(this.debounceTime))
      .subscribe((query) => {
        this.search.emit(query);
      });
  }

  onSearch(query: string) {
    this.queryChanged.next(query);
  }
}
