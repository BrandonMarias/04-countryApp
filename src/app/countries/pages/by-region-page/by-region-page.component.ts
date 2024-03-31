import { Component } from '@angular/core';
import { Countries } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent {
  public countries: Countries[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(region: string): void {
    this.countriesService.searchByRegion(region)
    .subscribe((countries) => {
      this.countries = countries;
    });
  }
}
