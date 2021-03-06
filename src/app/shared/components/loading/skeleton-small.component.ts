import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-skeleton-small',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="w-full max-w-sm mx-auto">
      <div
        class="grid w-full max-w-xs overflow-hidden border border-indigo-400 rounded-lg animate-pulse"
      >
        <!-- flag -->
        <div class="w-full h-40 bg-indigo-400"></div>
        <!-- end flag -->

        <div class="flex-1 p-6 pb-10 space-y-4">
          <!-- name -->
          <div class="w-2/4 h-6 bg-indigo-400 rounded"></div>
          <!-- end name -->

          <!-- population -->
          <div class="w-3/4 h-6 bg-indigo-400 rounded"></div>
          <!-- end population -->

          <!-- region -->
          <div class="w-2/6 h-6 bg-indigo-400 rounded"></div>
          <!-- end region -->

          <!-- capital -->
          <div class="w-2/4 h-6 bg-indigo-400 rounded"></div>
          <!-- end capital -->
        </div>
      </div>
    </div>
  `,
})
export class SkeletonSmallComponent {}
