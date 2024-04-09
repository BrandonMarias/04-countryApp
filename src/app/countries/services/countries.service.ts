import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, of } from 'rxjs';
import { Countries } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

const URL_COUNTRIES = 'https://restcountries.com/v3.1';
@Injectable({ providedIn: 'root' })
export class CountriesService {
  private cacheStore: CacheStore = {
    byCapital: {
      term: '',
      data: [],
    },
    byCountry: {
      term: '',
      data: [],
    },
    byRegion: {
      term: '',
      data: [],
    },
  };

  constructor(private httpClient: HttpClient) {}

  search(queryType: string, query: string): Observable<Countries[]> {
    return this.httpClient
      .get<Countries[]>(`${URL_COUNTRIES}/${queryType}/${query}`)
      .pipe(catchError(() => of([] as Countries[])));
  }

  searchByAlphaCode(alphaCode: string): Observable<Countries[]> {
    return this.search('alpha', alphaCode);
  }

  searchByCapital(capital: string): Observable<Countries[]> {
    return this.search('capital', capital).pipe(
      tap(countries => this.cacheStore.byCapital = { term: capital, data: countries }));
  }

  searchByCountry(country: string): Observable<Countries[]> {
    return this.search('name', country);
  }

  searchByRegion(region: string): Observable<Countries[]> {
    return this.search('region', region);
  }

  getCacheStore(): CacheStore {
    return this.cacheStore;
  }
}
