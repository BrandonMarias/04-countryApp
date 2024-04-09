import { Component, Input, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Regions } from '../../interfaces/regions.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss',
})
export class ByRegionPageComponent implements OnInit {
  public countries: Countries[] = [];

  private regions: Regions[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  public selectedRegion?: Regions;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.getCacheStore().byRegion.term;
    this.countries = this.countriesService.getCacheStore().byRegion.data;
  }

  public isLoading: boolean = false;

  searchByRegion(region: Regions): void {
    this.selectedRegion = region;
    this.isLoading = true;
    this.countriesService.searchByRegion(region).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

  getSelectedRegion(): Regions | undefined {
    return this.selectedRegion;
  }

  getRegions(): Regions[] {
    return this.regions;
  }
}
