import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-country-search-box',
  templateUrl: './country-search-box.component.html',
  styleUrl: './country-search-box.component.scss',
})
export class CountrySearchBoxComponent implements OnInit, OnDestroy {
  private debouncer = new Subject<string>();

  @ViewChild('txtSearchIput')
  public searchInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter<string>();

  public searchCountry(value: string): void {
    this.onSearch.emit(value);
    this.searchInput.nativeElement.value = '';
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(350)).subscribe((value) => {
      this.onSearch.emit(value);
    });
  }
  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }
}
