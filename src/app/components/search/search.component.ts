import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchOptions } from '../../models/SearchOptions';

@Component({
  selector: 'currencies-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchOptions = new EventEmitter<SearchOptions>();
  options: SearchOptions;
  searchBy: string;
  searchText: string;
  @Input() notFound: boolean;

  constructor() { }

  ngOnInit() {
    this.notFound = false;
  }

  sendSearchOptions(): void {
    this.options = new SearchOptions(this.searchBy, this.searchText);
    this.searchOptions.emit(this.options);
  }

  emptyFields(): void {
    this.searchBy = '';
    this.searchText = '';
    this.options = new SearchOptions(null, null);
    this.notFound = false;
    this.searchOptions.emit(this.options);
  }
}
