import { Injectable } from '@angular/core';
import { Theme } from '../components/theme/theme.mode';

@Injectable({ providedIn: "root" })
export class ThemeService {

  darkTheme: Theme = {
    name: "Light Mode",
    src: "/assets/icons/sun-outline-dark.png"
  };
  /**
   * - Current Theme
   */
  theme = this.darkTheme;

  isLight = true;

  constructor() {
    this.loadTheme();
  }

  toggle(): void {
    // When is Light theme will change to dark theme
    if (this.isLight) this.toDarkTheme();

    // When is dark theme will change to light theme
    else this.toLightTheme();

    // backup theme to local storage
    this.backup();
  }

  /**
   * - Change to Dark Theme
   * @private
   */
  private toDarkTheme(): void {
    // this.theme = this.lightTheme;
    this.isLight = false;
  }

  /**
   * - Change to Light Theme
   * @private
   */
  private toLightTheme(): void {
    this.theme = this.darkTheme;
    this.isLight = true;
  }

  private loadTheme(): void {
    const isLight = localStorage.getItem("theme");

    if (!isLight || isLight === "true") {
      this.toLightTheme();
    } else {
      this.toDarkTheme();
    }
  }


  private backup(): void {
    localStorage.setItem("theme", String(this.isLight));
  }

  get isDark(): boolean {
    return !this.isLight;
  }

}
