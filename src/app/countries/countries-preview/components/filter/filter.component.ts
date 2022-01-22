import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'lbk-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  regions: string[] = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  @Input() region!: string;
  @Output() searchByRegion = new EventEmitter<string>();

  get current() {
    return !this.region ? 'All' : this.region;
  }

  identifyRegion(index: number, region: string) {
    return index;
  }

  onRegion(region: string) {
    if (region === 'All') {
      return this.searchByRegion.emit('');
    }

    return this.searchByRegion.emit(region);
  }
}
