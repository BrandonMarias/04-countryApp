import { Component } from '@angular/core';
import { Countries } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss'
})
export class ByCountryPageComponent {
  public countries: Countries[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry(country: string): void {
    this.countriesService.searchByCountry(country)
    .subscribe((countries) => {
      this.countries = countries;
    });
  }
}
