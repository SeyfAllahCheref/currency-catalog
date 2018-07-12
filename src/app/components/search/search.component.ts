import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency} from '../../model/Currencies';
import { SearchOptions } from '../../model/SearchOptions';

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

  constructor() { }

  ngOnInit() {
  }

  sendSearchOptions(): void {
    if(this.searchBy !== '' && this.searchText !== '') {
      this.options = new SearchOptions(this.searchBy, this.searchText);
      console.log(this.options);
      this.searchOptions.emit(this.options);
    }
  }

  emptyFields(): void {
    this.searchBy = '';
    this.searchText = '';
    this.options = new SearchOptions(this.searchBy, this.searchText);
    console.log(this.options);
    this.searchOptions.emit(this.options);
  }
}
