import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lbk-unsubscribe',
  template: '',
  styles: []
})
export class Unsubscribe implements OnDestroy {
  subscriptions: Subscription[] = [];


  /**
   * @param another: another subscription
   */
  set appendSub(another: Subscription) {
    this.subscriptions.push(another);
  }


  ngOnDestroy(): void {
    this.unsubscribes();
  }


  private unsubscribes(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}

