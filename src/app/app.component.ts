import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { Unsubscribe } from './shared/components/unsubscribe.component';
import { LoadingService } from './shared/service/loading.service';
import { ThemeService } from './shared/service/theme.service';

@Component({
  selector: 'lbk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends Unsubscribe implements OnInit {
  isLoading!: boolean;

  constructor(
    readonly themeService: ThemeService,
    private loadingService: LoadingService,
    private router: Router,
    private _ref: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    this.appendSub = this.loadingService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
      this._ref.detectChanges();
    });

    //
    // this.router.events
    //   .pipe(
    //     filter(
    //       event =>
    //         event instanceof NavigationStart ||
    //         event instanceof NavigationEnd ||
    //         event instanceof NavigationCancel ||
    //         event instanceof NavigationError
    //     )
    //   )
    //   .subscribe(event => {
    //     // If it's the start of navigation, `add()` a loading indicator
    //     if (event instanceof NavigationStart) {
    //       this.isLoadingService.add();
    //       return;
    //     }
    //
    //     // Else navigation has ended, so `remove()` a loading indicator
    //     this.isLoadingService.remove();
    //   });
  }
}
