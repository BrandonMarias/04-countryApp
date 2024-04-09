import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss',
})
export class ByCapitalPageComponent implements OnInit{
  public countries: Countries[] = [];
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.getCacheStore().byCapital.data;
    this.initialValue = this.countriesService.getCacheStore().byCapital.term;
  }

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
