import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-country-search-box',
  templateUrl: './country-search-box.component.html',
  styleUrl: './country-search-box.component.scss',
})
export class CountrySearchBoxComponent {
  @ViewChild('txtSearchIput')
  public searchInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter<string>();

  public searchCountry(value: string): void {
    this.onSearch.emit(value);
    this.searchInput.nativeElement.value = '';
  }
}
