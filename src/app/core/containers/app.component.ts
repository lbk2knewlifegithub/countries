import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lbk-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- header -->
    <lbk-header></lbk-header>
    <!-- end header -->

    <!-- outlet -->
    <router-outlet></router-outlet>
    <!-- end outlet -->
  `,
})
export class AppComponent implements OnInit {
  constructor(private readonly _store: Store) {}

  ngOnInit() {}
}
