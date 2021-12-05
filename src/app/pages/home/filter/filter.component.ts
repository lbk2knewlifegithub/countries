import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lbk-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filters: string[] = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  current: string = this.filters[0];

  @Output() filterChange = new EventEmitter<string>();
  @Input() isDark!: boolean;

}
