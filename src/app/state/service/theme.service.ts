import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // loadTheme(): ThemeState | undefined {
  //   throw Error();
  //   // const theme = localStorage.getItem('theme');
  //   // return !theme ? undefined : JSON.parse(theme);
  // }
  // backup(theme: ThemeState): void {
  //   throw Error();
  //   localStorage.setItem('theme', JSON.stringify(theme));
  // }
  // setTheme(theme: ThemeState): void {
  //   const { darkTheme } = theme;
  //   if (darkTheme) return document.body.classList.add('dark-theme');
  //   document.body.classList.remove('dark-theme');
  // }
}
