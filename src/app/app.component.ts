import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Unsubscribe } from './shared/components/unsubscribe.component';
import { AppState } from './state/app.state';
import { getLoading } from './state/shared-state/shared.selector';

@Component({
  selector: 'lbk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends Unsubscribe implements OnInit {
  constructor( private readonly _store: Store<AppState>) { super(); }

  ngOnInit() { }
}
