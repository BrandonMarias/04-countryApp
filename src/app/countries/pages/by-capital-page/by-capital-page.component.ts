import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss',
})
export class ByCapitalPageComponent {
  public countries: Countries[] = [];

  constructor(private countriesService: CountriesService) {}

  public isLoading: boolean = false;

  searchByCapital(capital: string): void {
    this.isLoading = true;
    this.countriesService.searchByCapital(capital)
    .subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
