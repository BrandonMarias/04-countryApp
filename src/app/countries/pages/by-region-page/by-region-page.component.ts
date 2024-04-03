import { Component } from '@angular/core';
import { Countries } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent {
  public countries: Countries[] = [];

  private regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  private selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}
  public isLoading: boolean = false;

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.isLoading = true;
    this.countriesService.searchByRegion(region)
    .subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

  getSelectedRegion(): Region | undefined{
    return this.selectedRegion;
  }

  getRegions(): Region[] {
    return this.regions;
  }
}
