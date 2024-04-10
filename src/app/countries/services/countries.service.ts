import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, of } from 'rxjs';
import { Countries } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Regions } from '../interfaces/regions.type';

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

  constructor(private httpClient: HttpClient) {
    this.loadCacheFromLocalStorage();
  }

  private saveCacheToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadCacheFromLocalStorage(): void {
    const cacheStore = localStorage.getItem('cacheStore');
    if (cacheStore) {
      this.cacheStore = JSON.parse(cacheStore);
    }
  }

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
      tap(
        (countries) =>
          (this.cacheStore.byCapital = { term: capital, data: countries })
      ),
      tap(() => this.saveCacheToLocalStorage())
    );
  }

  searchByCountry(country: string): Observable<Countries[]> {
    return this.search('name', country).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountry = { term: country, data: countries })
      ),
      tap(() => this.saveCacheToLocalStorage())
    );
  }

  searchByRegion(region: Regions): Observable<Countries[]> {
    return this.search('region', region).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byRegion = { term: region, data: countries })
      ),
      tap(() => this.saveCacheToLocalStorage())
    );
  }

  getCacheStore(): CacheStore {
    return this.cacheStore;
  }
}
