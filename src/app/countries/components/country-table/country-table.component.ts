import { Component, Input } from '@angular/core';
import { Countries } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss'
})
export class CountryTableComponent {

  @Input() countries: Countries[] = [];



}
