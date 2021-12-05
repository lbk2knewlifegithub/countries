import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Theme } from '../../components/theme/theme.mode';
import { FilterService } from '../../service/filter.service';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'lbk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  darkTheme: Theme = {
    name: "Dark Mode",
    src: "/assets/icons/moon-outline-dark.png"
  };


  constructor(
    public themeService: ThemeService,
    private _filterService: FilterService
  ) {}

  // /**
  //  * - Go to Home
  //  */
  async onHome(): Promise<void> {
    await this._filterService.goHome();
  }
}
