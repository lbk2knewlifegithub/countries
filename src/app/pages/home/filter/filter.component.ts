import { Component, Input, OnInit } from '@angular/core';
import { FilterState } from 'src/app/state/filter/filter.state';
@Component({
  selector: 'lbk-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  regions: string[] = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  @Input('filter') filter!: FilterState;
  ngOnInit(): void {}

  get current() {
    return !this.filter.region ? 'All' : this.filter.region;
  }

   queryParams(region: string) {
    const {name} = this.filter;
    if (region === 'All') return {name};

    return {region, name};
  }

  identifyRegion(index: number, region: string) {
    return index;
  }
}
