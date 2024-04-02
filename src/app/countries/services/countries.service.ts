import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of } from 'rxjs';
import { Countries } from '../interfaces/country.interface';

const URL_COUNTRIES = 'https://restcountries.com/v3.1';
@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  search(queryType: string, query: string): Observable<Countries[]> {
    return this.httpClient
      .get<Countries[]>(`${URL_COUNTRIES}/${queryType}/${query}`)
      .pipe(catchError(() => of([] as Countries[])), delay(1000));
  }

  searchByAlphaCode(alphaCode: string): Observable<Countries[]> {
    return this.search('alpha', alphaCode);
  }

  searchByCapital(capital: string): Observable<Countries[]> {
    return this.search('capital', capital);
  }

  searchByCountry(country: string): Observable<Countries[]> {
    return this.search('name', country);
  }

  searchByRegion(region: string): Observable<Countries[]> {
    return this.search('region', region);
  }
}
