import {
  ChangeDetectionStrategy, Component,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Unsubscribe } from './shared/components/unsubscribe.component';
import { AppState } from './state/app.state';

@Component({
  selector: 'lbk-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends Unsubscribe implements OnInit {

  constructor(private readonly _store: Store<AppState>) {
    super();
  }

  ngOnInit() {}
}
