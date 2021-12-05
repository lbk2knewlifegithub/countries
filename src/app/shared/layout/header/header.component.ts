import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Theme } from '../../components/theme/theme.mode';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'lbk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  darkTheme: Theme = {
    name: 'Dark Mode',
    src: '/assets/icons/moon-outline-dark.png',
  };

  constructor(public themeService: ThemeService) {}
}
