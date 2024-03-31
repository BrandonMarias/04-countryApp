import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Countries } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss',
})
export class CountryPageComponent implements OnInit {
  public country?: Countries;
  public translations: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countriesService.searchByAlphaCode(id)))
      .subscribe((country) => {
        if (!country.length) {
          this.router.navigateByUrl('');
          return;
        }
        this.country = country[0];
        this.getTranslations();
        return;
      });
  }

  public getTranslations(): void {
    if (this.country && this.country.translations) {
      this.translations = Object.keys(this.country.translations).map(
        (key: string) => this.country?.translations[key].common || ''
      );
    }
  }
}
