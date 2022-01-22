import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild
} from '@angular/core';
import {
  fadeInUpOnEnterAnimation,
  fadeOutDownOnLeaveAnimation,
  zoomInUpOnEnterAnimation,
  zoomOutDownOnLeaveAnimation
} from 'angular-animations';
import { DropDownContentDirective } from './dropdown-content.directive';

@Component({
  selector: 'lbk-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>

    <div
      *ngIf="expanded"
      @zoomInUpOnEnter
      @zoomOutDownOnLeave
      (mouseover)="mouseOverContent()"
      (mouseleave)="mouseLeaveContent()"
      class="absolute top-[calc(100%+20px)] z-50"
      [id]="contentId"
    >
      <ng-template [ngTemplateOutlet]="content.templateRef"></ng-template>
    </div>
  `,
  styles: [
    `
      :host {
        position: relative;
      }
    `,
  ],
  animations: [
    fadeOutDownOnLeaveAnimation(),
    fadeInUpOnEnterAnimation(),
    zoomInUpOnEnterAnimation(),
    zoomOutDownOnLeaveAnimation(),
  ],
})
export class DropDownComponent {
  static nextId = 0;

  contentId = `dropdown-${++DropDownComponent.nextId}`;

  hoverToggle = false;
  hoverContent = false;

  @ContentChild(DropDownContentDirective) content!: DropDownContentDirective;

  constructor(private readonly _cd: ChangeDetectorRef) {}

  maskForCheck() {
    this._cd.markForCheck();
  }

  get expanded(): boolean {
    return this.hoverContent || this.hoverToggle;
  }

  mouseOverContent() {
    if (this.hoverContent) return;

    this.hoverContent = true;
  }

  mouseLeaveContent() {
    if (!this.hoverContent) return;

    setTimeout(() => {
      this.hoverContent = false;
      if (this.hoverToggle) return;
      this.maskForCheck();
    }, 1000);
  }

  close(){
    this.hoverToggle = false;
    this.hoverContent = false;
  }
}
