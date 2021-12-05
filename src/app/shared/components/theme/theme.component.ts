import { Component, Input } from '@angular/core';
import { Theme } from './theme.mode';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'lbk-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  @Input() isDarkTheme!: boolean;

  get name(): string{
    return this.isDarkTheme ? "Dark Mode" : "Light Mode";
  }
}
