export class SearchOptions {
  searchBy: string;
  searchText: string;
  constructor(searchBy: string, searchText: string) {
    this.searchBy = searchBy;
    this.searchText = searchText;
  }
}
